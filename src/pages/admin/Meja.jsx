import React, { useState } from "react";
import QRCode from "qrcode";
import Swal from "sweetalert2";
export default function Meja() {
  const [nomorMeja, setNomorMeja] = useState(0);
  const [qrCode, setQrCode] = useState(null);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const getMeja = async () => {
    const response = await fetch("https://harjos.draf.app/api/meja", {
      method: "GET",
    });
    const data = await response.json();
    setData(data.data);
  };

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      `https://fnb-table.vercel.app/${nomorMeja}/menu`,
      {
        width: 300,
        height: 300,
        color: {
          dark: "#335383FF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQrCode(url);
      }
    );
  };

  const deleteMeja = (id) => {
    fetch(`https://harjos.draf.app/api/meja/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getMeja();
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Meja deleted successfully",
        });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      nomor_meja: parseInt(nomorMeja),
      qrcode: qrCode,
    };
    console.log(JSON.stringify(formData));
    //qr code to database
    fetch("https://harjos.draf.app/api/meja", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getMeja();
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Meja added successfully",
        });
        setShow(false);
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
    getMeja();
  }, []);

  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Meja
        </h1>
        <div className="flex flex-row">
          <button
            onClick={toggle}
            className="bg-blue-500 p-2 rounded text-white"
          >
            {show ? "Tutup QR" : "GenerateQR"}
          </button>
        </div>
        {/* {show && (
          <div className="rounded-lg bg-white p-8 shadow-2xl my-2">
            <div className="grid px-6 mx-auto">
              <div className="flex flex-row justify-between">
                <input
                  className="rounded-lg border border-gray-400 p-2"
                  type="number"
                  placeholder="Nomor Meja"
                  value={nomorMeja}
                  onChange={(e) => setNomorMeja(e.target.value)}
                />
                <button
                  className="bg-blue-500 p-2 rounded text-white text-lg font-bold"
                  onClick={GenerateQRCode}
                >
                  Generate
                </button>
              </div>
              {qrCode && (
                <>
                  <img src={qrCode} alt="qrcode" />
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 p-2 rounded my-4 text-white"
                  >
                    SIMPAN DATA
                  </button>
                </>
              )}
            </div>
          </div>
        )} */}
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="relative w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <tr>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Nomor Meja</td>
                  <td className="px-4 py-3">QRCode</td>
                  <td className="px-4 py-3">Action</td>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
                {data ? (
                  data.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {index + 1}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {item.nomor_meja}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <img src={item.qrcode} alt="qrcode" />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <button
                            onClick={() => deleteMeja(item.id)}
                            className="bg-red-500 p-2 rounded text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4">
                      Data Kosong
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {show && (
        <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center appear-done enter-done">
          <div className="w-full overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl appear-done enter-done">
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-2xl p-4 font-semibold dark:text-gray-200 text-black">
                  Generate QR Code
                </h1>
              </div>
              <div>
                <button
                  onClick={toggle}
                  className="dark:text-white text-black p-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="rounded-lg my-2">
              <div className="grid px-6 mx-auto">
                <div className="flex flex-col justify-between">
                  <input
                    className="rounded-lg border border-gray-400 p-2"
                    type="number"
                    placeholder="Nomor Meja"
                    value={nomorMeja}
                    onChange={(e) => setNomorMeja(e.target.value)}
                  />
                  <button
                    className="bg-blue-500 p-2 rounded text-white text-lg font-bold"
                    onClick={GenerateQRCode}
                  >
                    Generate
                  </button>
                </div>
                {qrCode && (
                  <>
                    <img src={qrCode} className="my-2 mx-auto" alt="qrcode" />
                    <button
                      onClick={handleSubmit}
                      className="bg-blue-500 p-2 rounded my-4 text-white"
                    >
                      SIMPAN DATA
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
