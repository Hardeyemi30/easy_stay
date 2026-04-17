"use client";

import { useState } from "react";

export default function PropertyCard({ property, className }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={`bg-white rounded-2xl shadow-md p-4 overflow-hidden hover:shadow-xl transition cursor-pointer ${className}`}
      >
        <img
          src={property.image}
          alt="property"
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <p className="text-lg font-semibold text-black">{property.title}</p>
          <p className="text-gray-500">{property.location}</p>

          <div className="flex justify-between mt-2">
            <span className="text-blue-600 font-bold">
              ${property.price}/night
            </span>
            <span className="text-yellow-500">⭐ {property.rating}</span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-4 text-black">{property.title}</h3>
            <p className="mb-4 text-black">{property.description}</p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}




