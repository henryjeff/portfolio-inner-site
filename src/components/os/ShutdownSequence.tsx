import React, { useEffect } from 'react';

export interface ShutdownSequenceProps {
    numShutdowns: number;
    setShutdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShutdownSequence: React.FC<ShutdownSequenceProps> = ({ setShutdown }) => {
    useEffect(() => {
        const timer = window.setTimeout(() => setShutdown(false), 1800);
        return () => window.clearTimeout(timer);
    }, [setShutdown]);

    return (
        <div className="system-shutdown" role="status">
            <p>Workstation restarting...</p>
            <span className="blinking-cursor" />
        </div>
    );
};

export default ShutdownSequence;
