import { motion } from "framer-motion";

export default function Imagepopup({ image, title, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={e => e.stopPropagation()} // Prevent closing when clicking the image/card itself
      >
        <img src={image} alt={title} className="max-w-full max-h-[70vh] rounded mb-4" />
        <p className="text-lg font-semibold text-gray-800">{title}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}