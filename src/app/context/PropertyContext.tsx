"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

interface PropertyContextType {
  properties: Property[];
  addProperty: (property: Omit<Property, "id" | "rating">) => void;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export function PropertyProvider({ children }: { children: ReactNode }) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("customProperties");
    if (stored) {
      setProperties(JSON.parse(stored));
    }
    setIsLoaded(true);
  }, []);

  const addProperty = (property: Omit<Property, "id" | "rating">) => {
    const newProperty: Property = {
      ...property,
      id: Date.now(),
      rating: 4.5,
    };
    const updated = [...properties, newProperty];
    setProperties(updated);
    localStorage.setItem("customProperties", JSON.stringify(updated));
  };

  return (
    <PropertyContext.Provider value={{ properties, addProperty }}>
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperties() {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error("useProperties must be used within PropertyProvider");
  }
  return context;
}