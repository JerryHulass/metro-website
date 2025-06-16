import { useState, useRef } from "react";


const images = [
  {
    src: "/images/rx7-tow.jpg",
    alt: "Service 1",
  },
  {
    src: "/images/vette.jpg",
    alt: "Service 2",
  },
  {
    src: "/images/mini_edited.jpg",
    alt: "Service 3",
  },
  {
    src: "/images/bmwm5.jpg",
    alt: "Service 4",
  },
  {
    src: "/images/wrx.jpg",
    alt: "Service 5",
  },
  {
    src: "/images/rx7.jpg",
    alt: "Service 6",
  },
  {
    src: "/images/redcar-logo.jpg",
    alt: "Service 7",
  },
  {
    src: "/images/paintbooth1.jpg",
    alt: "Service 8",
  },
  {
    src: "/images/rx7-wide.jpg",
    alt: "Service 9",
  },
  {
    src: "/images/paint-josh.jpeg",
    alt: "Service 10",
  },
  {
    src: "/images/pathfinder.jpeg",
    alt: "Service 11",
  },
  {
    src: "/images/airlift.jpeg",
    alt: "Service 12",
  },
  {
    src: "/images/bmw-m4.JPG",
    alt: "Service 13",
  },
];


export default function Offer() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
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
        <h1 className=" pb-3 text-2xl days-one-regular font-bold capitalize sm:text-3xl lg:text-4xl">Gallery</h1>
        <div
          className="w-full max-w-4xl mx-auto relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="w-full h-[28rem] sm:h-64 md:h-80 lg:h-96 object-contain rounded-xl transition-all duration-500 bg-black"
          />
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white"
            aria-label="Previous"
          >
            &#8592;
          </button>
          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white"
            aria-label="Next"
          >
            &#8594;
          </button>
          {/* Dots */}
          <div className="flex justify-center mt-2 space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === current ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}