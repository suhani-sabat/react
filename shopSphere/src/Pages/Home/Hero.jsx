import shoppingGirl from "../../Assets/shopping-girl.png";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16" >
        <div className="flex items-center justify-between gap-40 ">
          {/* Left Side - Image */}
          <div className="w-2/5">
            <img
              src={shoppingGirl}
              alt="Shopping Girl"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-3/5">
            {/* Badge */}
            <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              NEW COLLECTION 2026
            </span>

            {/* Heading */}
            <h1 className="text-6xl font-bold leading-tight mb-6">
              Discover Your <br />
              <span className="text-purple-600">Perfect Style</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-8 mb-8">
              Explore the latest trends in fashion, electronics, home and
              lifestyle. Shop premium products with amazing discounts and
              lightning fast delivery.
            </p>

            {/* Buttons */}
            <div className="flex gap-5">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition">
                Shop Now
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition">
                Explore Deals
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
