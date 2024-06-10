import { useState } from "react";

const ClassPage = ({ totalPosts, postPerPage, setCurrentPage, currentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  const [pa, setPa] = useState(1)
  console.log(pages);

  return (
    <div className="mt-5 flex justify-center space-x-1 dark:text-gray-800">
      <button
        title="previous"
        
        type="button"
        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

    {
        pages.map((page, index) => {
            return <button
            key={index}
            type="button"
            // onChange={() => setPa(page)}
            onClick={() => setCurrentPage(page)}
            className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md ${ currentPage === page && 'bg-cyan-600 text-white'} dark:bg-gray-50 dark:border-gray-100`}
            title="Page 4"
          >
            {page}
          </button>
        })
    }
  

      <button
      onClick={() => setCurrentPage()}
    //   onChange={() => setPa(currentPage )}
        title="next"
        type="button"
        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>

  );
};

export default ClassPage;
