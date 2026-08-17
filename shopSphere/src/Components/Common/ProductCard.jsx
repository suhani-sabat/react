import React from "react";

export default function ProductCard({
  image,
  title,
  price,
  oldPrice,
  discount,
  reviews,
  rating,
}) {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* ------Image Section ----------*/}
      <div className="relative h-56 bg-gray-50">
        {/* ------Discount Badge------- */}
        <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white">
          {discount}
        </span>

        {/* -----Wishlist Button------- */}
        <button
          type="button"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-purple-100"
          aria-label="Add to wishlist"
        >
          ♡
        </button>

        {/* ---------Product Image--------- */}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain p-6"
        />
      </div>

      {/* Product Information */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="truncate text-sm font-semibold text-gray-900">
          {title}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm text-yellow-500">
            {"★".repeat(Math.round(rating))}
          </span>

          <span className="text-xs text-gray-500">
            {rating} ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-purple-600">{price}</span>

          <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
        </div>
      </div>
    </div>
  );
}
