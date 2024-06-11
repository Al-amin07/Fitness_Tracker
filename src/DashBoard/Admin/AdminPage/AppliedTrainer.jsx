import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import AppliedRow from "./AppliedRow";
import Loading from "../../../Loading/Loading";
import { Helmet } from "react-helmet";

const AppliedTrainer = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: appliedTrainers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["applied-trainers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/applied-trainers");
      return data;
    },
  });

  if (isLoading) return <Loading />;
  return (
    <div>
      <Helmet>
        <title> Admin | AppliedTrainers</title>
      </Helmet>
      <table className="min-w-full leading-normal">
        <thead>
          <tr className="shadow-xl">
            <th
              scope="col"
              className="px-5 py-3 shadow-2xl border-0 text-gray-800  text-left text-lg uppercase font-medium"
            ></th>
            <th
              scope="col"
              className="px-5 py-3 shadow-2xl border-0 text-gray-800  text-left text-lg uppercase font-medium"
            >
              Full Name
            </th>
            <th
              scope="col"
              className="px-5 py-3 shadow-2xl border-0  text-gray-800  text-left text-lg uppercase font-medium"
            >
              Age
            </th>
            <th
              scope="col"
              className="px-5 py-3 shadow-2xl border-0 text-gray-800  text-left text-lg uppercase font-medium"
            >
              Email
            </th>

            <th
              scope="col"
              className="px-5 py-3 shadow-2xl border-0 text-gray-800  text-left text-lg uppercase font-medium"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {appliedTrainers?.map((item) => (
            <AppliedRow
              key={item._id}
              item={item}
              refetch={refetch}
              // isOpen={isOpen}
              // closeModal={closeModal}
              // modalHandler={modalHandler}
              // setIsOpen={setIsOpen}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppliedTrainer;

//  <tr key={item._id}>
//     <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//      <img className="h-12 w-12 rounded-full" src={item.profile_image} alt="" />
//     </td>
//     <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//       <p className='text-gray-900 whitespace-no-wrap'>{item.full_name}</p>
//     </td>
//     <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//     {item.age} Years
//     </td>

//     <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//     <p className='text-gray-900 whitespace-no-wrap text-center'>{item.years_of_experience} Years</p>

//     </td>
//     <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//       <button onClick={() => setIsOpen(true)} className='relative cursor-pointer inline-block px-4 py-3 font-semibold text-cyan-800 leading-tight'>
//         <span
//           aria-hidden='true'
//           className='absolute inset-0 bg-cyan-100 opacity-50 rounded-full'
//         ></span>
//         <span className='relative'><FaRegEye className="text-xl inline-block mr-2"/>Details</span>
//       </button>

//     </td>
//     <DetailsModal closeModal={closeModal} isOpen={isOpen} modalHandler={modalHandler} item={item._id}/>

//   </tr>
