import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Imagepopup from "../components/Imagepopup";

const photos = [
  { id: 1, image: "/car-images/bmw-m4.JPG", title: "BMW M4" },
  { id: 2, image: "/car-images/rx7-wide.jpg", title: "RX7 Widebody" },
  { id: 3, image: "/car-images/bmwm5.jpg", title: "BMW M5" },
  { id: 4, image: "/car-images/paint-josh.jpeg", title: "Paint Josh" },
  { id: 5, image: "/car-images/mini.jpg", title: "Mini Cooper" },
  { id: 6, image: "/car-images/bmwx3.jpeg", title: "BMW X3" },
  { id: 7, image: "/car-images/mini_edited.jpg", title: "Mini Cooper" },
  { id: 8, image: "/car-images/pathfinder.jpeg", title: "Pathfinder" },
  { id: 9, image: "/car-images/redcar-logo.jpg", title: "Red Car" },
  { id: 10, image: "/car-images/rx7-wide.jpg", title: "RX7 Widebody" },
  { id: 11, image: "/car-images/rx7.jpg", title: "RX7" },
  { id: 12, image: "/car-images/vette.jpg", title: "Corvette" },
  { id: 13, image: "/car-images/wrx.jpg", title: "WRX" },
  { id: 14, image: "/car-images/rangeblue.jpg", title: "blue range" },
  { id: 15, image: "/car-images/gtr.jpg", title: "GTR" },
  { id: 16, image: "/car-images/redmini.jpg", title: "Red Mini" },
  { id: 17, image: "/car-images/bmw235.jpg", title: "BMW M235i" },
];

export default function Gallery() {
  const [popup, setPopup] = useState(false);
  const [layoutId, setLayoutId] = useState(null);

  const openPopup = (id) => {
    setLayoutId(id);
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
    setLayoutId(null);
  };

  return (
    <div>
      <div className="image_grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((item) => (
          <div
            key={item.id}
            className="image_card cursor-pointer rounded overflow-hidden shadow hover:scale-105 transition"
            onClick={() => openPopup(item.id)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
      <div className="image_pop">
        <AnimatePresence>
          {popup && (
            <Imagepopup
              id={layoutId}
              onClose={closePopup}
              image={photos.find((p) => p.id === layoutId)?.image}
              title={photos.find((p) => p.id === layoutId)?.title}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
