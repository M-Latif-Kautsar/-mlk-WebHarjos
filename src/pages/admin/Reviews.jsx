import React from "react";

export default function Reviews() {
  const [reviews, setReviews] = React.useState([]);
  const getReviews = async () => {
    const response = await fetch("https://harjos.draf.app/api/reviews");
    const data = await response.json();
    setReviews(data.data);
  };

  React.useEffect(() => {
    getReviews();
  }, []);
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Reviews
        </h1>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <tr>
                  <td className="px-4 py-3">Nama Customer</td>
                  <td className="px-4 py-3">Review</td>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
                {reviews.map((review) => (
                  <tr>
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        {review.nama_customer}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        {review.review}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
