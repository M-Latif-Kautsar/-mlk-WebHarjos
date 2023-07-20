import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Navcart() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row my-4 items-center">
      <Link
        to=""
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        <IoMdArrowRoundBack size="32px" />
      </Link>
      <h1 className="mx-4 text-2xl font-bold">Keranjang</h1>
    </div>
  );
}
