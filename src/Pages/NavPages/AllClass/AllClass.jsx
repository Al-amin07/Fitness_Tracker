import { Helmet } from "react-helmet";
import useAllClass from "../../../Hooks/useAllClass";
import Loading from "../../../Loading/Loading";
import SingleClass from "./SingleClass";
import { useState } from "react";
import ClassPage from "./ClassPage";

const AllClass = () => {
  const [classes, , isLoading] = useAllClass();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const totalPages = Math.ceil(classes.length / postPerPage);
 

  const pages = [];

  for(let i = 1; i<=  Math.ceil(classes.length/postPerPage); i++){
    pages.push(i)
  }

  const slicedClass = classes.slice(firstPostIndex, lastPostIndex);
  

  const handlePrev = () => {
    if(currentPage - 1 > 0){
        setCurrentPage(currentPage - 1)
        
    }
  }
  const handleNext = () => {
    if(currentPage  < totalPages ){
        setCurrentPage(currentPage + 1)
    }
  }

  if (isLoading) return <Loading />;
  return (
    <div>
      <Helmet>
        <title> FitnessSynced | All Class</title>
      </Helmet>
      <h2 className="text-3xl font-medium text-slate-500 text-center mb-12">
        See Our Latest Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-2">
        {slicedClass.map((item) => (
          <SingleClass key={item._id} item={item} />
        ))}
      </div>

      {/* <div>
      <button
       onClick={handlePrev}
        title="previous"
        type="button"
        className="inline-flex items-center justify-center w-12 h-12 text-lg py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
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
        {pages.map((page, index) => {
          return (
            <button
              onClick={() => setCurrentPage(page)}
              className={`inline-flex items-center justify-center w-12 h-12 text-lg border rounded ${
                currentPage === page && "bg-cyan-600 text-white"
              }  shadow-md dark:bg-gray-50 dark:border-gray-100`}
              key={index}
            >
              {page }
            </button>
          );
        })}

<button
    //   onClick={() => setCurrentPage()}
    //   onChange={() => setPa(currentPage )}
        title="next"
       
        type="button"
        className="inline-flex items-center justify-center w-12 h-12 text-lg py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
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
      </div> */}

      {/* <ClassPage
      totalPosts={classes.length}
      postPerPage={postPerPage}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}

      /> */}

<div className="mt-10 flex justify-center space-x-1 dark:text-gray-800">
      <button
        title="previous"
        onClick={handlePrev}
        type="button"
        className="inline-flex items-center justify-center w-10 h-10 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
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
            className={`inline-flex items-center justify-center w-10 h-10 text-sm border rounded shadow-md ${ currentPage === page && 'bg-cyan-600 text-white'} dark:bg-gray-50 dark:border-gray-100`}
            title="Page 4"
          >
            {page}
          </button>
        })
    }
  

      <button
     onClick={handleNext}
    //   onChange={() => setPa(currentPage )}
        title="next"
        type="button"
        className="inline-flex items-center justify-center w-10 h-10 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100"
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
    </div>
  );
};

export default AllClass;
