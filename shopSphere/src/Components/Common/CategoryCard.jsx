import React from 'react'

export default function CategoryCard({ image, name }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Category Image */}
      <div className="h-32 overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Category Name */}
      <div className="p-4 text-center bg-purple-200">
        <h3 className="text-base font-semibold  text-purple-600 transition group-hover:text-gray-900">
          {name}
        </h3>
      </div>

    </div>
  );
}