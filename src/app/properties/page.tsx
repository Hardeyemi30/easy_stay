"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PropertyGrid from "../components/PropertyGrid";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Find your perfect stay 🏡
      </h1>

      <SearchBar onSearch={setSearchQuery} />
      <PropertyGrid searchQuery={searchQuery} />
    </div>
  );
}