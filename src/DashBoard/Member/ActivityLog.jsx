import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
// import { FaRegEye } from "react-icons/fa6";
// import { useState } from "react";
// import FeedbackModal from "../Modal/FeedbackModal";
import ActivityRow from "./ActivityRow";

const ActivityLog = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  // const axiosSecure = useAxiosSecure();
  const axioseCommon = useAxiosCommon();
  const { data: trainers = [] } = useQuery({
    queryKey: ["activity"],
    queryFn: async () => {
      const { data } = await axioseCommon.get("/applied-all-trainer");
      return data;
    },
  });
  console.log(trainers);
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mb-8">Activity Log</h2>
      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellspacing="0"
      >
        <tbody>
          <tr>
            <th
              scope="col"
              className="h-12 px-6 text-lg font-medium border-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Serial
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-lg font-medium border-0  stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Image
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-lg font-medium border-0  stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Name
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-lg font-medium border-0  stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Email
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-lg font-medium border-0  stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Status
            </th>
          </tr>
          {trainers.map((item, index) => (
            <ActivityRow 
            item={item}
            index={index}
            key={item._id}/>
            
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityLog;
