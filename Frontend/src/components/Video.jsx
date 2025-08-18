export default function Video() {
    return (
        <div className="bg-black pb-5">
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="block w-full aspect-auto border-5"
            >
                <source src="/images/red-corvette2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}