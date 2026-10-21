const DEFAULT_PARENT_ORIGIN = 'http://localhost:8080';

function isExactOrigin(origin: string): boolean {
    try {
        const url = new URL(origin);
        return url.origin === origin && (url.protocol === 'https:' ||
            (url.protocol === 'http:' && url.hostname === 'localhost'));
    } catch { return false; }
}

const configuredOrigins = process.env.REACT_APP_ALLOWED_PARENT_ORIGINS
    ?.split(',')
    .map((origin) => origin.trim())
    .filter(isExactOrigin);

const allowedParentOrigins = new Set(
    configuredOrigins !== undefined ? configuredOrigins : [DEFAULT_PARENT_ORIGIN]
);

function getTrustedParentOrigin(): string | null {
    if (window.parent === window) return null;

    const configuredOrigin = process.env.REACT_APP_PARENT_ORIGIN?.trim();
    if (configuredOrigin) return allowedParentOrigins.has(configuredOrigin) ? configuredOrigin : null;
    if (!document.referrer) return null;

    try {
        const referrerOrigin = new URL(document.referrer).origin;
        return allowedParentOrigins.has(referrerOrigin) ? referrerOrigin : null;
    } catch {
        return null;
    }
}

function sendToParent(message: Record<string, string | number>) {
    const parentOrigin = getTrustedParentOrigin();
    if (parentOrigin) window.parent.postMessage(message, parentOrigin);
}

function forwardPointerEvent(event: MouseEvent) {
    const type = event.type;
    if (type === 'mousemove') {
        sendToParent({
            type,
            clientX: event.clientX,
            clientY: event.clientY,
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight,
        });
        return;
    }

    if (type === 'mousedown' || type === 'mouseup') sendToParent({ type });
}

function forwardKeyboardEvent(event: KeyboardEvent) {
    if (event.type !== 'keydown' && event.type !== 'keyup') return;
    if (event.key.length === 0 || event.key.length > 64 || Array.from(event.key).some((character) => character.charCodeAt(0) < 32 || character.charCodeAt(0) === 127)) return;
    sendToParent({ type: event.type, key: event.key });
}

const bridgeListeners: Array<[string, EventListener]> = [
    ['mousemove', forwardPointerEvent as EventListener],
    ['mousedown', forwardPointerEvent as EventListener],
    ['mouseup', forwardPointerEvent as EventListener],
    ['keydown', forwardKeyboardEvent as EventListener],
    ['keyup', forwardKeyboardEvent as EventListener],
];

export function disposeParentBridge() {
    bridgeListeners.forEach(([type, listener]) =>
        window.removeEventListener(type, listener)
    );
    window.removeEventListener('pageshow', registerParentBridge);
}

// Keep listeners through the back/forward cache and announce readiness on restore.
function registerParentBridge() {
    bridgeListeners.forEach(([type, listener]) => window.addEventListener(type, listener));
    sendToParent({ type: 'ready' });
}
window.addEventListener('pageshow', registerParentBridge);
registerParentBridge();

const hotModule = (
    module as NodeModule & { hot?: { dispose: (callback: () => void) => void } }
).hot;
if (hotModule) hotModule.dispose(disposeParentBridge);

export {};
