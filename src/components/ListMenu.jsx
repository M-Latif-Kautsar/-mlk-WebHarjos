import React from "react";
import convertToRupiah from "../lib/convertToRupiah";

export default function ListMenu({ product }) {
  return (
    <div className="flex flex-row items-center gap-4 p-4">
      <img
        src={`https://harjos.draf.app/api/menu/${product.gambar}`}
        alt={product.nama}
        className="w-20 h-20 object-cover"
      />
      <div className="flex flex-col">
        {product.status === "Tersedia" ? (
          <span className="inline-flex w-1/2 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {product.status}
          </span>
        ) : (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            {product.status}
          </span>
        )}
        <span className="text-xl font-medium">{product.nama}</span>
        <span className="text-md font-medium">{convertToRupiah(product.harga)}</span>
      </div>
      <hr />
    </div>
  );
}
