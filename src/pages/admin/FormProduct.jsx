import React from "react";
import Swal from "sweetalert2";

export default function FormProduct() {
  const url = "https://harjos.draf.app/api/menu";
  const [image, setImage] = React.useState(null);
  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("gambar", image);
    formData.append("nama", e.target.nama.value);
    formData.append("harga", e.target.harga.value);
    formData.append("status", e.target.status.value);
    formData.append("kategori", e.target.kategori.value);
    formData.append("deskripsi", e.target.deskripsi.value);
    formData.append("stok", e.target.stok.value);
    formData.append("rating", e.target.rating.value);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.status === "422"){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
        else{
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Product added successfully",
          });
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Form Product
        </h1>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            Add Product
          </div>
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
          >
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              <span>Nama</span>
              <input
                type="text"
                name="nama"
                className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
              />
            </label>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              <span>Harga</span>
              <input
                type="text"
                name="harga"
                className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
              />
            </label>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              <span>Kategori</span>
              <select
                name="kategori"
                className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
              >
                <option value="Makanan">Makanan</option>
                <option value="Minuman">Minuman</option>
              </select>
            </label>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              <span>Status</span>
              <select
                name="status"
                className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
              >
                <option value="Tersedia">Tersedia</option>
                <option value="Tidak Tersedia">Tidak Tersedia</option>
              </select>
            </label>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              <span>Stok</span>
              <input
                type="number"
                name="stok"
                className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
              />
            </label>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              <span>Rating</span>
              <select
                name="rating"
                className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              <span>Deskripsi</span>
              <textarea
                name="deskripsi"
                id=""
                cols="10"
                rows="3"
                className="block w-full text-sm dark:text-gray-300 form-textarea focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:shadow-outline-gray focus:shadow-outline-purple mt-1"
              ></textarea>
            </label>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              <span>Gambar</span>
              <input
                type="file"
                name="gambar"
                onChange={handleImageUpload}
                className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
              />
            </label>
            <div className=" my-4">
              <button
                type="submit"
                className="px-4 py-2 mr-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
