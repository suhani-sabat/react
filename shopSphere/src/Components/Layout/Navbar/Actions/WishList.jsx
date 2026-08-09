import wishlistIcon from "../../../../Assets/wishlist.svg";

export default function WishList() {
  return (
    <button
      type="button"
      className="p-2 rounded-full hover:bg-purple-100 transition-colors duration-200 cursor-pointer"
      aria-label="Wishlist"
    >
      <img
        src={wishlistIcon}
        alt="Wishlist"
        className="w-6 h-6"
      />
    </button>
  );
}