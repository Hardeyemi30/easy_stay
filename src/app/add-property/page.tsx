"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db, storage } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AddProperty() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.location ||
      !formData.price ||
      !formData.description ||
      !imageFile
    ) {
      alert("Please fill all fields and select an image");
      return;
    }

    try {
      setLoading(true);

      const imageRef = ref(storage, `properties/${Date.now()}_${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);

      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, "properties"), {
        title: formData.title,
        location: formData.location,
        price: parseInt(formData.price),
        description: formData.description,
        imageUrl: imageUrl,
        createdAt: new Date(),
      });

      alert("Property added successfully!");

      router.push("/");

    } catch (error) {
      console.error(error);
      alert("Error adding property");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto  text-white p-6 rounded-2xl ">
      <h1 className="text-2xl font-bold mb-6">Add Property</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 rounded bg-blue-700 placeholder-blue-200"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-3 rounded bg-blue-700 placeholder-blue-200"
        />

        <input
          type="number"
          name="price"
          placeholder="Price per night"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-3 rounded bg-blue-700 placeholder-blue-200"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-3 bg-blue-700 rounded"
        />

        <textarea
          name="description"
          placeholder="Property Description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 rounded bg-blue-700 placeholder-blue-200"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 p-3 rounded font-bold hover:bg-blue-700"
        >
          {loading ? "Uploading..." : "Add Property"}
        </button>
      </form>
    </div>
  );
}