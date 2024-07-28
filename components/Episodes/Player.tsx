'use client'

import React, { Suspense, useState, useEffect } from 'react';

export default function PodMinglePlayer() {
    const playerType = 1;
    return (
        <>
            {playerType === 1 ? (
                <Suspense fallback={<p>Loading video...</p>}>
                    <VideoComponent fileName="my-video.mp4" />
                </Suspense>
            ) : (
                <section>
                    <Suspense fallback={<p>Loading video...</p>}>
                        <VideoComponentIframe />
                    </Suspense>
                    {/* Other content of the page */}
                </section>
            )}
        </>
    );
}

interface VideoComponentProps {
    fileName: string;
}

function VideoComponent({ fileName }: VideoComponentProps) {
    const [url, setUrl] = useState<string | null>('');
    return (
        <video controls preload="none" aria-label="Video player">
            <source src={''} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}

function VideoComponentIframe() {
    const [src, setSrc] = useState<string | null>(null);

  

    if (!src) {
        return <p>Loading...</p>;
    }

    return <iframe src={src} frameBorder="0" allowFullScreen />;
}
