import React, { useRef, useEffect } from 'react';

const EasterEggVideo = ({ onClose }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const audioRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const audio = audioRef.current;

        const renderFrame = () => {
            if (video.paused || video.ended) {
                return;
            }

            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = frame.data;

            // 초록색 크로마키 색상
            const greenR = 13;
            const greenG = 235;
            const greenB = 53;
            const sensitivity = 150;

            for (let i = 0; i < data.length; i += 4) {
                const red = data[i];
                const green = data[i + 1];
                const blue = data[i + 2];

                const distance = Math.sqrt(
                    (red - greenR) ** 2 +
                    (green - greenG) ** 2 +
                    (blue - greenB) ** 2
                );

                if (distance < sensitivity) {
                    data[i + 3] = 0; // alpha channel
                }
            }

            ctx.putImageData(frame, 0, 0);
            requestAnimationFrame(renderFrame);
        };

        video.addEventListener('play', () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            renderFrame();
        });

        return () => {
            video.removeEventListener('play', renderFrame);
        };
    }, []);

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div style={styles.overlay} onClick={handleOverlayClick}>
            <div style={styles.container}>
                <canvas ref={canvasRef} style={styles.video} />
                <video ref={videoRef} style={styles.hiddenVideo} controls autoPlay onEnded={onClose}>
                    <source src="/easterEgg/Mutsuki_Dance.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    container: {
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
    },
    video: {
        width: '100%',
        borderRadius: '10px',
        filter: 'saturate(1.7)', // 채도 높이기
    },
    hiddenVideo: {
        display: 'none',
    },
};

export default EasterEggVideo;
