import React from "react";
import { Wallet } from "lucide-react";
import Card from "../../components/Card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import convertToRupiah from "../../lib/convertToRupiah";
export default function Dashboard() {
  const [productData, setProductData] = React.useState([]);
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  const getProductData = async () => {
    const response = await fetch("https://harjos.draf.app/api/menu");
    const data = await response.json();
    setProductData(data.data);
  };

  const deleteProduct = async (id) => {
    const response = await fetch(`https://harjos.draf.app/api/menu/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    //if success reload page
    if (data) {
      getProductData();
    }
  };

  React.useEffect(() => {
    getProductData();
  }, []);

  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Dashboard
        </h1>
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <Card
            title="Total Orders"
            value="2,409"
            icon={<Wallet size={24} />}
          />
          <Card
            title="Total Orders"
            value="2,409"
            icon={<Wallet size={24} />}
          />
          <Card
            title="Total Orders"
            value="2,409"
            icon={<Wallet size={24} />}
          />
          <Card
            title="Total Orders"
            value="2,409"
            icon={<Wallet size={24} />}
          />
        </div>
        <br />
        <div className="w-full overflow-hidden shadow-xs">
          <div className="w-full overflow-x-auto">
            <div className="text-white m-4 flex flex-row justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Tabel Produk
                </h2>
              </div>
              <div>
                <Link
                  to="/admin/add-product"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                >
                  Add Produk
                </Link>
              </div>
            </div>
            <table className="w-full whitespace-no-wrap my-2">
              <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <tr>
                  <td className="px-4 py-3">id</td>
                  <td className="px-4 py-3">Nama Produk</td>
                  <td className="px-4 py-3">Harga</td>
                  <td className="px-4 py-3">Gambar</td>
                  <td className="px-4 py-3">Deskripsi</td>
                  <td className="px-4 py-3">Status</td>
                  <td className="px-4 py-3">Stok</td>
                  <td className="px-4 py-3">Kategori</td>
                  <td className="px-4 py-3">Rating</td>
                  <td className="px-4 py-3">Action</td>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
                {productData ? (
                  productData.map((product) => (
                    <tr>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {product.id}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">{product.nama}</td>
                      <td className="px-4 py-3 text-sm">{convertToRupiah(product.harga)}</td>
                      <td className="px-4 py-3 text-sm">
                        <img
                          src={`https://harjos.draf.app/api/menu/${product.gambar}`}
                          alt={product.nama}
                          className="w-20 h-20 object-cover"
                        />
                      </td>
                      <td className="px-4 py-3 text-sm">{product.deskripsi}</td>
                      <td className="px-4 py-3 text-sm">{product.status}</td>
                      <td className="px-4 py-3 text-sm">{product.stok}</td>
                      <td className="px-4 py-3 text-sm">{product.kategori}</td>
                      <td className="px-4 py-3 text-sm">{product.rating}</td>
                      <td className="px-4 py-3 text-sm">
                        <Link
                          to={`/admin/edit-product/${product.id}`}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="text-center py-4">
                      Data Kosong
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          <h1>Data Grafik</h1>
        </div>
        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <Doughnut data={data} options={options} />
          </div>
          <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <Doughnut data={data} options={options} />
          </div>
        </div>
      </div>
    </main>
  );
}
