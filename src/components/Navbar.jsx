import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {

  const cart = useSelector((state) => state.cart);
  return (
    <header className="flex flex-row justify-between items-center mx-4 h-[70px]">
      <h1 className="text-md font-bold ml-2">The Harjos Java Resto</h1>
      <div className="relative">
        <Link to="/cart">
          <IoCartOutline size="32px" className="ml-auto" />
        </Link>
        {cart.length > 0 ? <span className="h-5 w-5 bg-red-600 z-1 rounded-full absolute -top-1 right-0 text-white text-center text-sm">
          {cart.length}
        </span> : null}
      </div>
    </header>
  );
}
