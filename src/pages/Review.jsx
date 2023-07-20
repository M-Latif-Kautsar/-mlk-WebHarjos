import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Review() {
    const navigate = useNavigate();
    const location = localStorage.getItem("location");
    const [form, setForm] = React.useState({
        nama_customer: "",
        review: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://harjos.draf.app/api/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    navigate(location);
                }
            });
    };

  return (
    <div className="bg-slate-300 w-full h-screen">
      <div className="container mx-auto max-w-[375px] border-solid bg-white h-screen flex flex-col">
        <div class="mt-5 p-4 relative z-10 bg-white sm:mt-10 md:p-10">
          <div class="text-center">
            <h2 class="text-xl text-gray-800 font-bold sm:text-3 text-black">
              The Harjos Java Resto
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="mb-4 sm:mb-8">
              <label
                for="hs-feedback-post-comment-name-1"
                class="block mb-2 text-sm font-medium text-black"
              >
                Nama
              </label>
              <input
                type="text"
                id="hs-feedback-post-comment-name-1"
                class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4"
                placeholder="Nama"
                onChange={(e) => setForm({ ...form, nama_customer: e.target.value })}
              />
            </div>

            <div>
              <label
                for="hs-feedback-post-comment-textarea-1"
                class="block mb-2 text-sm font-medium text-black"
              >
                Review
              </label>
              <div class="mt-1">
                <textarea
                  id="hs-feedback-post-comment-textarea-1"
                  name="hs-feedback-post-comment-textarea-1"
                  rows="3"
                  class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4"
                  placeholder="Tinggalkan review disini..."
                  onChange={(e) => setForm({ ...form, review: e.target.value })}
                ></textarea>
              </div>
            </div>

            <div class="mt-6 grid">
              <button
                type="submit"
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
              >
                Kirim
              </button>
            </div>
            <div class="mt-6 grid">
              <Link
                to=""
                onClick={(e) => {
                  e.preventDefault();
                  navigate(location);
                }}
                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
              >
                Batal
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
