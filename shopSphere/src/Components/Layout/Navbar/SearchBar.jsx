import React from "react";

export default function SearchBar() {
  return (
    <div className="relative w-64">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none transition focus:border-purple-500 focus:bg-white"
      />

      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>
    </div>
  );
}