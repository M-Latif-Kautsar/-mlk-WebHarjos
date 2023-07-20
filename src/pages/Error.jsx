import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="bg-slate-300 w-full h-screen">
      <div className="container mx-auto max-w-[375px] border-solid bg-white h-screen flex flex-col place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-9xl">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Scan Error!
          </p>

          <p className="mt-4 text-gray-500">
            It looks like you found a glitch in the matrix...
          </p>
        </div>
      </div>
    </div>
  );
}
