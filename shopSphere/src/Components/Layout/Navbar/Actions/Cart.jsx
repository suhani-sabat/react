import cartIcon from "../../../../Assets/cart.svg";

export default function Cart() {
  return (
    <button
      type="button"
      className="p-2 rounded-full hover:bg-purple-100 transition-colors duration-200 cursor-pointer"
      aria-label="Shopping cart"
    >
      <img
        src={cartIcon}
        alt="Cart"
        className="w-8 h-8"
      />
    </button>
  );
}