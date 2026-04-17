"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(location);
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md flex gap-3 text-black-50" >
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border-black-50 border p-2 rounded w-full"
      />
      <input type="date" className="border p-2 rounded"/>
      <input type="date" className="border p-2 rounded"/>

      <button onClick={handleSearch} className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700">
        Search
      </button>
    </div>
  );
}