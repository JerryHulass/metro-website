import { useState } from "react";

export default function Offer() {
  const [expanded, setExpanded] = useState(false);

  const workTypes = [
    "Collision Repair",
    "Fender Rolling",
    "Custom Paint Work",
    "Paint Correction",
    "Glass Replacement",
    "Body Kit Installation",
    "Custom Bumpers",
    "Authorized Airlift Installer",
    "Suspension",
    "Lambo/Suicide Door Installation",
    "Custom Work",
    "Smoked/tinted Tail-lights",
  ];

  // Show only first 4 if not expanded
  const visibleWork = expanded ? workTypes : workTypes.slice(0, 4);

  return (
    <div className="p-4 flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6 mt-10">
      {/* First Card */}
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 transition transform hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex items-center gap-2 mb-2">
          <img src="/public/assets/separator-carsblue.svg" alt="separator icon" className="h-6" />
          <p className="dm-sans-regular capitalize text-blue-600 font-bold">WHAT WE OFFER</p>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 days-one-regular">We Service All</h2>
        <div className="mb-4">
          <p className="text-gray-700">
            Insurance Companies <br />
            Dealerships <br />
            Walk Ins <br />
            Referrals
          </p>
        </div>
      </div>
      {/* Second Card */}
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 transition transform hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex items-center gap-2 mb-2">
          <img src="/public/assets/separator-carsblue.svg" alt="separator icon" className="h-6" />
          <p className="dm-sans-regular capitalize text-blue-600 font-bold">TYPE OF WORK</p>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 days-one-regular">What We Do</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {visibleWork.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
}