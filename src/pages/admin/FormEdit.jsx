import React,{ useState, useEffect } from 'react'
import Swal from "sweetalert2";
import { useParams,useNavigate } from 'react-router-dom';

function FormEdit() {
    const [productData, setProductData] = useState([]);
    const [formData, setFormData] = useState();
    const navigate = useNavigate();
    const { id } = useParams();
    const getMenuById = async () => {
        const response = await fetch(`https://harjos.draf.app/api/menu/${id}`);
        const data = await response.json();
        setProductData(data.data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://harjos.draf.app/api/menu/${id}`, {
          method: "PUT",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.status === "400"){
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
          .then(() => {
            navigate("/admin");
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

    useEffect(() => {
        getMenuById();
    }, [id]);

  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Form Edit
        </h1>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            Edit Product
          </div>
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            method='PUT'
            className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
          >
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              <span>Nama</span>
              <input
                type="text"
                name="nama"
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
              />
            </label>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              <span>Harga</span>
              <input
                type="text"
                name="harga"
                onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
              />
            </label>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              <span>Kategori</span>
              <select
                onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                name="status"
                className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
              >
                <option value="Tidak Tersedia">Tidak Tersedia</option>
                <option value="Tersedia">Tersedia</option>
              </select>
            </label>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              <span>Stok</span>
              <input
                onChange={(e) => setFormData({ ...formData, stok: e.target.value })}
                type="text"
                name="stok"
                className="block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5 focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700 mt-1"
              />
            </label>
            <label className="block text-sm text-gray-700 dark:text-gray-400">
              <span>Rating</span>
              <select
                onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                className="block w-full text-sm dark:text-gray-300 form-textarea focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:shadow-outline-gray focus:shadow-outline-purple mt-1"
              ></textarea>
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
  )
}

export default FormEdit;