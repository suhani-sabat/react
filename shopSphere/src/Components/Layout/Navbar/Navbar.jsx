import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import Actions from "./Actions/Actions";

function Navbar() {
  return (
    <nav className="w-full">
      <div className="max-w-350 mx-auto px-6 py-4 flex items-center justify-between gap-16">
        <Logo />
        <NavLinks />
        <SearchBar />
        <Actions />
      </div>
    </nav>
  );
}

export default Navbar;
