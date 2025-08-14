import { useState, useRef } from "react";

export default function Slider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const isDragging = useRef(false);

    const isMobile = () => window.innerWidth < 640;

    // Mouse events
    const handleMouseDown = (event) => {
        isDragging.current = true;
        moveSlider(event);
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (event) => {
        if (isDragging.current) {
            moveSlider(event);
        }
    };

    // Touch events
    const handleTouchStart = (event) => {
        isDragging.current = true;
        moveSliderTouch(event);
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
    };

    const handleTouchMove = (event) => {
        if (isDragging.current) {
            moveSliderTouch(event);
        }
    };

    // Mouse move logic
    const moveSlider = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    // Touch move logic
    const moveSliderTouch = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const touch = event.touches[0];
        const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    return (
        <div className="p-2 sm:p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-2 sm:p-8 mb-4 sm:mb-8">
                <div className="pt-5 pb-1 flex gap-1">
                    <img src="/images/separator-carsblue.svg" alt="seperator icon" />
                    <p className="dm-sans-regular capitalize text-blue-600 font-bold">
                        OUR LATEST WORK
                    </p>
                </div>
                <h1 className="pb-3 text-2xl days-one-regular font-bold capitalize sm:text-3xl lg:text-4xl">Before and After</h1>
                <div className="w-full relative">
                    <div
                        className="relative w-full m-auto aspect-[70/45] overflow-hidden select-none"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onTouchMove={handleTouchMove}
                        style={{ cursor: "ew-resize" }}
                    >
                        <img src="/images/BMW-after2.jpeg" loading="eager" alt="" className="w-full h-full object-cover" />
                        <div
                            className="absolute top-0 left-0 right-0 w-full aspect-[70/45] m-auto overflow-hidden select-none"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <img src="/images/BMW-before.jpeg" loading="eager" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <div
                                className="absolute top-0 bottom-0 w-1 bg-blue-600 cursor-ew-resize"
                                style={{ left: `calc(${sliderPosition}% - 1px)` }}
                            />
                            <div
                                className="bg-blue-600 absolute rounded-full h-3 w-3"
                                style={{
                                    left: `calc(${sliderPosition}% - 6px)`,
                                    top: "calc(50% - 6px)"
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
