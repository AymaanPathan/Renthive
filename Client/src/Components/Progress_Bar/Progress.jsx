import { useState } from "react";

function Progress() {
  const [page, setPage] = useState(0);
  const [width, setWidth] = useState(1);
  // 16
  // 48
  // full

  const handlePage = () => {
    if (page <= 2) {
      // this is beacuse even though the page is on 2 it will it will increment to 3 cause 2 is <== 2
      setPage((prev) => prev + 1);
      setWidth(width + (page + 23));
    }
  };

  console.log(`Page is ${page} and width is ${width} `);

  return (
    <div className="max-w-xs mx-auto">
      <h2 className="sr-only">Steps</h2>

      <div>
        <div className="overflow-hidden rounded-full bg-gray-200 h-1">
          <div className={`h-1 w-${width} rounded-full bg-[#F65730]`}></div>
        </div>

        <ol className="mt-3 grid grid-cols-3 text-xs font-medium text-gray-500">
          <li className="flex items-center justify-start text-gray-500 gap-1">
            <span className="hidden sm:inline"> Details </span>

            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#F65730"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>
          </li>

          <li className="flex items-center justify-center text-gray-500 gap-1">
            <span className="hidden sm:inline"> Duration </span>

            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#F65730"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </li>

          <li className="flex items-center justify-end gap-1">
            <span className="hidden sm:inline"> Payment </span>

            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#F65730"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </li>
        </ol>
      </div>
      <button
        onClick={handlePage}
        className="mt-6 cursor-pointer p-3 bg-blue-500 text-white rounded-2xl active:scale-95"
      >
        Next Step
      </button>
    </div>
  );
}

export default Progress;
