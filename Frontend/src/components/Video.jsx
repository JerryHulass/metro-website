export default function Video() {
    return (
        <div className="bg-black pb-5">
            <video
                autoPlay
                muted
                defaultMuted
                loop
                playsInline
                preload="auto"
                className="block aspect-[3/4] border-5"
            >
                <source src="/car-images/red-corvette2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}