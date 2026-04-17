"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import PropertyGrid from "./components/PropertyGrid";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Find your perfect stay 🏡
      </h1>

      <SearchBar onSearch={handleSearch} />
      <PropertyGrid searchQuery={searchQuery} />
    </div>
  );
}