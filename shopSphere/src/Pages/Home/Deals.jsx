import { useEffect, useState } from "react";
import ProductCard from "../../Components/Common/ProductCard";
import {NavLink} from "react-router-dom"

export default function Deals() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <section className="px-6 py-12">
      {/* ---------Section Heading------- */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Today's Deals</h2>

          <p className="mt-2 text-gray-500">
            Grab the best deals before they're gone!
          </p>
        </div>

        <NavLink
          to="/deals"
          className="font-medium text-purple-600 transition hover:text-purple-800"
        >
          View All Deals →
        </NavLink>
      </div>

      {/*----- Products------*/}
      <div className="grid grid-cols-6 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.thumbnail}
            title={product.title}
            price={`$${product.price}`}
            oldPrice={`$${(
              product.price /
              (1 - product.discountPercentage / 100)
            ).toFixed(2)}`}
            discount={`-${Math.round(product.discountPercentage)}%`}
            reviews={product.reviews.length}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
}
