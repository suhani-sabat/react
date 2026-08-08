import Reaact from "react";

export default function Announcement() {
  return (
    <div className="bg-[#07111f] text-white h-9 flex items-center justify-between px-10 text-xs font-medium">
      <div className="flex items-center gap-2">
        🚚
        <span>Free Delivery on orders over $50</span>
      </div>

      <div className="flex items-center gap-2">
        🔥
        <span>Summer Sale is Live! Up to 60% OFF</span>
      </div>

      <div className="flex items-center gap-2">
        📞
        <span>24/7 Customer Support</span>
      </div>
    </div>
  );
}
