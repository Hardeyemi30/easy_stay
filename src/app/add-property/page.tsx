"use client";

import { useState } from "react";
import { useProperties } from "../context/PropertyContext";
import { useRouter } from "next/navigation";

export default function AddProperty() {
  const router = useRouter();
  const { addProperty } = useProperties();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.location || !formData.price || !formData.image || !formData.description) {
      alert("Please fill in all fields");
      return;
    }

    addProperty({
      title: formData.title,
      location: formData.location,
      price: parseInt(formData.price),
      image: formData.image,
      description: formData.description,
    });

    setFormData({
      title: "",
      location: "",
      price: "",
      image: "",
      description: "",
    });

    alert("Property added successfully!");
    router.push("/");
  };

  return (
    <div className="max-w-xl mx-auto bg-blue-800 text-white p-6 rounded-2xl shadow-md mx-5">
      <h1 className="text-2xl font-bold mb-6 text-white">Add Property</h1>

      <form onSubmit={handleSubmit} className="my-3">
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-blue-600 bg-blue-700 bg-opacity-50 p-3 rounded text-white placeholder-blue-200 mb-3"
        />
        <br />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border border-blue-600 bg-blue-700 bg-opacity-50 p-3 rounded text-white placeholder-blue-200"
        />
        <input
          type="number"
          name="price"
          placeholder="Price per night"
          value={formData.price}
          onChange={handleChange}
          className="w-full border border-blue-600 bg-blue-700 bg-opacity-50 p-3 rounded text-white placeholder-blue-200"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full border border-blue-600 bg-blue-700 bg-opacity-50 p-3 rounded text-white placeholder-blue-200"
        />
        <textarea
          name="description"
          placeholder="Property Description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full border border-blue-600 bg-blue-700 bg-opacity-50 p-3 rounded text-white placeholder-blue-200"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700 mt-4"
        >
          Add Property
        </button>
      </form>
    </div>
  );
}