"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">

      <h1 className="text-4xl font-bold">
        AI Real Estate Platform 🏡
      </h1>

      <p className="mt-4 text-gray-600">
        Search properties using AI-powered platform
      </p>

      {/* Search Input */}
      <div className="mt-6 flex gap-2">
        <input
          type="text"
          placeholder="Search location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        />

        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
          onClick={() => alert(`Searching for: ${search}`)}
        >
          Search
        </button>
      </div>

    </main>
  );
}
