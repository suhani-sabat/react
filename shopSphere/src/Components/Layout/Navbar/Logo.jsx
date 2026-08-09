import { Link } from "react-router-dom";
import logoIcon from "../../../Assets/shop-logo.svg";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 hover:opacity-80 transition"
    >
      <img
        src={logoIcon}
        alt="ShopSphere logo"
        className="w-8 h-8"
      />

      <span className="text-xl font-bold">
        <span className="text-gray-900">Shop</span>
        <span className="text-purple-600">Sphere</span>
      </span>
    </Link>
  );
}