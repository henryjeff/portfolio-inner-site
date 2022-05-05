import React, { useEffect, useState } from 'react';

export interface VideoAssetProps {
    src: string;
}

const VideoAsset: React.FC<VideoAssetProps> = ({ src }) => {
    const id = `video-${src}`;
    const [, setHasLoaded] = useState(false);

    useEffect(() => {
        const vid = document.getElementById(id);
        if (vid) {
            vid.oncanplay = function () {
                setHasLoaded(true);
            };
        }
    }, [id]);

    return (
        <div>
            <video
                id={`video-${src}`}
                style={Object.assign({}, styles.video)}
                src={src}
                autoPlay
                muted
                loop
                disablePictureInPicture
            />
        </div>
    );
};

const styles: StyleSheetCSS = {
    container: {
        width: '100%',
    },
    loading: {
        width: '100%',
    },
    video: {
        width: '100%',
    },
    loadingBox: {
        backgroundColor: 'red',
    },
};

export default VideoAsset;
