import { NavLink } from "react-router-dom";

export default function NavLinks() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "Deals", path: "/deals" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex items-center gap-6">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${
              isActive
                ? "text-purple-600"
                : "text-gray-900 hover:text-purple-600"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}