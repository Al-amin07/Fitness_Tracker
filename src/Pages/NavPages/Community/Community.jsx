import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import SingleCommunity from "./SingleCommunity";
import { Helmet } from "react-helmet";
import Loading from "../../../Loading/Loading";
import { useState } from "react";
// import useAuth from "../../../Hooks/useAuth";

const Community = () => {
// const { user } = useAuth();
 const axiosCommon = useAxiosCommon();
  const { data: communitys = [], isLoading } = useQuery({
    queryKey: ["community"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/community");
      return data;
    },
  });


  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const totalPages = Math.ceil(communitys.length / postPerPage);
  console.log("total ", totalPages);

  const pages = [];

  
  for(let i = 1; i<= totalPages; i++){
    pages.push(i)
  }

  const slicedommunity = communitys.slice(firstPostIndex, lastPostIndex);

  
  const handlePrev = () => {
    if (currentPage - 1 > 0) {
      setCurrentPage(currentPage - 1);
      console.log("Hiiii");
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
 

  if(isLoading) return <Loading/>
  return (
    <div>
      <Helmet>
        <title> FitnessSynced | Community</title>
      </Helmet>

      <h2 className="text-3xl text-slate-500 font-medium text-center mb-12">
        All Community Posts
      </h2>
      <div className="grid grid-cols-1 px-2 mx-auto gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {slicedommunity.map((item) => (
          <SingleCommunity key={item._id} item={item} />
        ))}
      </div>


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

        {pages.map((page, index) => {
          return (
            <button
              key={index}
              type="button"
              // onChange={() => setPa(page)}
              onClick={() => setCurrentPage(page)}
              className={`inline-flex items-center justify-center w-10 h-10 text-sm border rounded shadow-md ${
                currentPage === page && "bg-cyan-600 text-white"
              } dark:bg-gray-50 dark:border-gray-100`}
              title="Page 4"
            >
              {page}
            </button>
          );
        })}

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

export default Community;
