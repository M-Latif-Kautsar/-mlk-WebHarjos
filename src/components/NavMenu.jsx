import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function NavMenu() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const {menuId} = useParams();
  return (
    <div className="flex flex-row items-center justify-between p-4 my-4">
      <Link
      to=""
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
      >
        <IoMdArrowRoundBack size="32px" />
      </Link>
      <div className="relative">
        <Link to="/cart">
          <IoCartOutline size="32px" className="ml-auto" />
        </Link>
        {cart.length > 0 ? (
          <span className="w-2 h-2 bg-red-600 z-1 rounded-full absolute -top-1 right-0 animate-ping"></span>
        ) : null}
      </div>
    </div>
  );
}
