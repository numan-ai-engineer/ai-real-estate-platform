"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = async () => {
    try {
      const res = await fetch("http://localhost:5000/");
      const data = await res.text();
      setResult(data);
    } catch (error) {
      setResult("Error connecting to backend");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">

      <h1 className="text-4xl font-bold">
        AI Real Estate Platform 🏡
      </h1>

      <p className="mt-4 text-gray-600">
        Search properties using AI-powered system
      </p>

      <div className="mt-6 flex gap-2">
        <input
          type="text"
          placeholder="Search location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        />

        <button
          onClick={handleSearch}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

      {/* Result */}
      {result && (
        <p className="mt-6 text-blue-600">
          Server Response: {result}
        </p>
      )}

    </main>
  );
}
