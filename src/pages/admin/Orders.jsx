import React from "react";
import Swal from "sweetalert2";
import convertToRupiah from "../../lib/convertToRupiah";

export default function Orders() {
  const [orderData, setOrderData] = React.useState([]);
  const getOrderData = async () => {
    const response = await fetch("https://harjos.draf.app/api/orders", {
      method: "GET",
    });
    const data = await response.json();
    setOrderData(data.data);
    console.log(data.data);
  };

  const handleConfirm = (id) => {
    const formData = {
      status: "confirmed",
    };
    fetch(`https://harjos.draf.app/api/orders/confirm/${id}`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json;",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Order confirmed successfully",
          });
        }
      })
      .then(() => {
        getOrderData();
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

  React.useEffect(() => {
    getOrderData();
  }, []);

  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Orders
        </h1>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <tr>
                  <td className="px-4 py-3">No order</td>
                  <td className="px-4 py-3">No Meja</td>
                  <td className="px-4 py-3">Nama</td>
                  <td className="px-4 py-3">Nama Makanan</td>
                  <td className="px-4 py-3">Jumlah</td>
                  <td className="px-4 py-3">Status</td>
                  <td className="px-4 py-3">Total</td>
                  <td className="px-4 py-3">Action</td>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
                {orderData ? (
                  orderData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {item.id}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {item.meja.nomor_meja}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {item.nama_customer}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {item.menu.nama}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {item.jumlah}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {item.status}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {convertToRupiah(item.total)}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-4 text-sm">
                          {item.status === "pending" ? (
                            <button
                              type="button"
                              onClick={() => handleConfirm(item.id)}
                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-500 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
                              aria-label="Edit"
                            >
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.293 9.293a1 1 0 010-1.414L7.586 2.93a1 1 0 011.414 0l7.07 7.07a1 1 0 010 1.414l-4.293 4.292a1 1 0 01-1.414
                                                          0l-7.07-7.07a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          ) : (
                            <button
                              type="button"
                              disabled
                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-gray-500 border border-transparent rounded-lg active:bg-gray-600 hover:bg-gray-600 focus:outline-none focus:shadow-outline-green"
                              aria-label="Edit"
                            >
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.293 9.293a1 1 0 010-1.414L7.586 2.93a1 1 0 011.414 0l7.07 7.07a1 1 0 010 1.414l-4.293 4.292a1 1 0 01-1.414
                                                          0l-7.07-7.07a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          )}
                          {/* <button
                            type="button"
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-500 border border-transparent rounded-lg active:bg-red-600 hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
                            aria-label="Delete"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 5.293a1 1 0 011.414 0L10
                                8.586l3.293-3.293a1 1 0 011.414 1.414L11.414
                                10l3.293 3.293a1 1 0 01-1.414 1.414L10
                                11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586
                                10 5.293 6.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button> */}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center py-4">
                      No data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
