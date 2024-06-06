import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import "./AllNew.css";
const AllNewsLetter = () => {
  const axiosSecure = useAxiosSecure();
  const { data: subscribers = [] } = useQuery({
    queryKey: ["subscription"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/subscription");
      return data;
    },
  });
  console.log(subscribers);

  return (
    <div>
      <h2
        className="text-4xl font-semibold text-center mb-6
          "
      >
        All New Subscribers{" "}
      </h2>
      <div>
        {/* <table>
          <thead>
            <tr>
              <th
                scope="col"
                className="px-5 py-3 shadow-2xl bg-white    text-gray-800  text-left text-lg uppercase font-medium"
              ></th>
              <th
                scope="col"
                className="px-5 py-3 shadow-2xl bg-white   text-gray-800  text-left text-lg uppercase font-medium"
              >
                Full Name
              </th>
              <th
                scope="col"
                className="px-5 py-3 shadow-2xl bg-white  text-gray-800  text-left text-lg uppercase font-medium"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-5 py-3 shadow-2xl bg-white  text-gray-800  text-left text-lg uppercase font-medium"
              >
                Years Of Experience
              </th>

              <th
                scope="col"
                className="px-5 py-3 shadow-2xl bg-white border-none  text-gray-800  text-left text-lg uppercase font-medium"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {subscribers?.map((item, index) => (
             <tr key={item._id}>
             <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Name</th>
             <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Title</th>
             <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Company</th>
             <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Role</th>
             <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Username</th>
           </tr>
            ))}
          </tbody>
        </table> */}

        <table
          className="w-full text-left border border-separate rounded border-slate-200"
          cellspacing="0"
        >
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Serial
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Name
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Email
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Time
              </th>
              
            </tr>
           {
            subscribers.map((item, index) =>  <tr key={item._id} className="transition-colors duration-300 hover:bg-slate-50">
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
             {index + 1}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
         {item.name}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
              {item.email}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
              {item.time}
            </td>
       
          </tr>)
           }
            {/* <tr className="transition-colors duration-300 hover:bg-slate-50">
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Agnes Sherman
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Developer
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Apple
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Admin
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                shermanagnes
              </td>
            </tr>
            <tr className="transition-colors duration-300 hover:bg-slate-50">
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Jemma Cummings
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Senior Designer
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                20goto10
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Member
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                jemmaC
              </td>
            </tr>
            <tr className="transition-colors duration-300 hover:bg-slate-50">
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Jimi Cardenas
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Copywriter
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Wind-UI
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Owner
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                cardenasji
              </td>
            </tr>
            <tr className="transition-colors duration-300 hover:bg-slate-50">
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Mateusz Tucker
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Project Manager
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Tailwindui
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                Member
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                mt
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllNewsLetter;
