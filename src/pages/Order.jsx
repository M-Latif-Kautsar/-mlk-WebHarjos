import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAllItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import convertToRupiah from "../lib/convertToRupiah";

export default function Order() {
  const cart = useSelector((state) => state.cart);
  const [nama, setNama] = React.useState("");
  const [status, setStatus] = React.useState("pending");
  const url = "https://harjos.draf.app/api/orders";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuId = localStorage.getItem("menuId");
  const meja = parseInt(menuId);
  const total = localStorage.getItem("total");
  const handleOrder = (e) => {
    e.preventDefault();
    cart.forEach((item) => {
      const data = {
        menu_id: item.id,
        meja_id: meja,
        nama_customer: nama,
        jumlah: item.quantity,
        total: total,
        status: status,
      };
      console.log(JSON.stringify(data));
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(removeAllItem());
        })
        .catch((err) => console.log(err));
    });
    navigate("/section");
  };

  console.log(menuId);

  return (
    <div className="bg-slate-300 w-full">
      <div className="container mx-auto max-w-[375px] border-solid bg-white h-screen flex flex-col">
        <section>
          <h1 class="sr-only">Checkout</h1>
          <div class="mx-auto">
            <div class="bg-gray-50">
              <div class="mx-auto pt-[44px] space-y-8 px-4 lg:px-8">
                <div class="flex items-center gap-4">
                  <span class="h-10 w-10 rounded-full bg-blue-700"></span>
                  <h2 class="font-medium text-gray-900">{`Meja: ${menuId}`}</h2>
                </div>
                <div>
                  <p class="text-2xl font-medium tracking-tight text-gray-900">
                    {convertToRupiah(total)}
                  </p>
                  <p class="mt-1 text-sm text-gray-600">Total dari menu yang dipilih</p>
                  <ul class="my-4 divide-y divide-gray-100">
                    {cart.map((item, index) => (
                      <li class="flex items-center gap-4 py-4">
                        <img
                          src={`https://harjos.draf.app/api/menu/${item.gambar}`}
                          alt=""
                          class="h-16 w-16 rounded object-cover"
                        />

                        <div>
                          <h3 class="text-sm text-gray-900">{item.nama}</h3>

                          <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                            <div>
                              <dt class="inline">Harga:</dt>
                              <dd class="inline">{convertToRupiah(item.harga)}</dd>
                            </div>

                            <div>
                              <dt class="inline">Jumlah:</dt>
                              <dd class="inline">{item.quantity}</dd>
                            </div>

                            <div>
                              <dt class="inline">Kategori:</dt>
                              <dd class="inline">{item.kategori}</dd>
                            </div>
                          </dl>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div class="bg-white">
              <div class="mx-auto px-4 lg:px-8">
                <form class="grid grid-cols-6 gap-4 my-2">
                  <div class="col-span-6">
                    <label
                      for="nama_customer"
                      class="block text-xs font-medium text-gray-700"
                    >
                      Nama
                    </label>
                    <input
                      type="text"
                      id="nama_customer"
                      name="nama_customer"
                      onChange={(e) => setNama(e.target.value)}
                      class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </div>
                  <div class="col-span-6">
                    <button
                      onClick={handleOrder}
                      class="block w-full rounded-md bg-blue-500 my-2 p-2.5 text-sm text-white transition hover:shadow-lg"
                    >
                      Pesan
                    </button>
                    <Link
                      to=""
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                      }}
                      class="block text-center w-full rounded-md bg-red-500 my-2 p-2.5 text-sm text-white transition hover:shadow-lg"
                    >
                      Kembali
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
