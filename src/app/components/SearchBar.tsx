"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSearch = () => {
    onSearch(location);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg border flex flex-col md:flex-row gap-3 items-center justify-center text-center ">
      
      <div className="flex flex-col w-full gap-x-2">
        <label className="text-sm text-gray-500 mt-2">Location</label>
        <input
          type="text"
          placeholder="Where are you going?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={handleKeyDown}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="text-sm text-gray-500 mt-2">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="text-sm text-gray-500 mt-2">Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />
      </div>

      <div className="w-full md:w-auto mt-2 md:mt-5">
        <button
          onClick={handleSearch}
          className="w-sm  bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
        >
         Search
        </button>
      </div>
    </div>
  );
}