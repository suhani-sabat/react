import React from "react";
import User from "./User";
import Cart from "./Cart";
import WishList from "./WishList";

export default function Actions() {
  return (
    <div className="flex items-center gap-2">
      <User />
      <WishList />
      <Cart />
    </div>
  );
}
