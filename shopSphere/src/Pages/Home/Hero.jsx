import shoppingGirl from "../../Assets/shopping-girl.png";

export default function Hero() {
  return (
    <>
      {/* ================= TOP ANNOUNCEMENT BAR ================= */}

      {/* ================= HERO ================= */}
      <section className="w-full bg-purple-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between gap-20">
            {/* LEFT SIDE - IMAGE */}

            <div className="w-2/5 relative h-130 flex items-end justify-center">
              {/* -------- Purple Flowing Background -------- */}
              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  -translate-x-1/2
                  translate-y-8
                  w-130
                  h-130
                  bg-[#cec6e7]
                  border border-purple-100
                  rounded-[65%_35%_50%_50%/45%_50%_55%_55%]
                "
              ></div>
              {/* -------- Decorative Dots -------- */}
              <div
                className="
                  absolute
                  top-12
                  left-4
                  w-20
                  h-20
                  opacity-70
                  bg-[radial-gradient(circle,#8b5cf6_1.5px,transparent_1.5px)]
                  bg-size-[12px_12px]
                  z-20
                "
              ></div>

              {/* -------- Girl -------- */}
              <img
                src={shoppingGirl}
                alt="Shopping woman"
                className="
                  relative
                  z-10
                  w-130
                  h-130
                  object-contain
                  translate-y-18
                "
              />
            </div>

            
            {/* RIGHT SIDE - CONTENT */}

            <div className="w-3/5">
              {/* Badge */}
              <span
                className="
                  inline-block
                  bg-purple-100
                  text-purple-700
                  px-4
                  py-1
                  rounded-full
                  border border-purple-500 
                  text-sm
                  font-semibold
                  mb-3
                "
              >
                NEW COLLECTION 2026
              </span>

              {/* Heading */}
              <h1 className="text-6xl font-bold leading-none mb-5">
                Discover Your <br />
                <span className="text-purple-600">Perfect Style</span>
              </h1>

              {/* Description */}
              <p className="text-gray-800 text-lg leading-8 mb-7">
                Explore the latest trends in fashion, electronics, home and
                lifestyle. Shop premium products with amazing discounts and
                lightning fast delivery.
              </p>

              {/* Buttons */}
              <div className="flex gap-5 mb-9">
                <button
                  className="
                    bg-purple-600
                    text-white
                    px-8
                    py-3
                    rounded-xl
                    hover:bg-purple-800
                    transition
                  "
                >
                  Shop Now →
                </button>

                <button
                  className="
                    border
                    border-gray-400
                    px-8
                    py-3
                    rounded-xl
                    hover:bg-gray-200
                    transition
                  "
                >
                  Explore Deals
                </button>
              </div>

            
              {/* FEATURES */}

              <div className="grid grid-cols-4 gap-7">
                {/* ================= FREE SHIPPING ================= */}
                <div className="flex items-center gap-3">
                  {/* Icon Circle */}
                  <div
                    className="
                      w-10
                      h-10
                      shrink-0
                      rounded-full
                      border
                      border-gray-300
                      flex
                      items-center
                      justify-center
                      bg-purple-200
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                  </div>

                  
                  <div>
                    <p className="font-semibold text-sm whitespace-nowrap">
                      Free Shipping
                    </p>
                    <p className="text-gray-500 text-sm leading-5">
                      On orders over $50
                    </p>
                  </div>
                </div>

                {/* ================= SECURE PAYMENT ================= */}
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-10
                      h-10
                      shrink-0
                      rounded-full
                      border
                      border-gray-300
                      flex
                      items-center
                      justify-center
                      bg-purple-200
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="font-semibold text-sm whitespace-nowrap">
                      Secure Payment
                    </p>

                    <p className="text-gray-500 text-sm leading-5">
                      100% secure checkout
                    </p>
                  </div>
                </div>

                {/* ================= EASY RETURNS ================= */}
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-10
                      h-10
                      shrink-0
                      rounded-full
                      border
                      border-gray-300
                      flex
                      items-center
                      justify-center
                      bg-purple-200
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="font-semibold text-sm whitespace-nowrap">
                      Easy Returns
                    </p>

                    <p className="text-gray-500 text-sm leading-5">
                      30-day return policy
                    </p>
                  </div>
                </div>

                {/* ================= SUPPORT ================= */}
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-10
                      h-10
                      shrink-0
                      rounded-full
                      border
                      border-gray-300
                      flex
                      items-center
                      justify-center
                      bg-purple-200
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1-4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1-4.5 0Z"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="font-semibold text-sm whitespace-nowrap">
                      24/7 Support
                    </p>

                    <p className="text-gray-500 text-sm leading-5">
                      Dedicated support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
