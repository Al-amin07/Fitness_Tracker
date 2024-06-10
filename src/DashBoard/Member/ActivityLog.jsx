import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { FaRegEye } from "react-icons/fa6";
import { useState } from "react";
import FeedbackModal from "../Modal/FeedbackModal";


const ActivityLog = () => {
    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const detailsHandler = () => {

    }
    // const axiosSecure = useAxiosSecure();
    const axioseCommon = useAxiosCommon()
    const { data: trainers = [] } = useQuery({
        queryKey: ['activity'],
        queryFn: async () => {
            const { data } = await axioseCommon.get('/applied-all-trainer')
            return data;
        }
    })
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
           {
            trainers.map((item, index) =>  <tr key={item._id} className="  bg-white shadow-lg">
           <td className="h-12 px-6 text-sm border-0 border-b border-slate-300   bg-white">
             {index + 1}
            </td>
            <td className="h-12 px-6 text-sm border-0 border-b border-slate-300  bg-white">
              <img className="h-12 w-12 rounded-full" src={item.profile_image} alt="" />
            </td>
            <td className="h-12 px-6 text-sm border-0 border-b border-slate-300   bg-white">
         {item.full_name}
            </td>
            <td className="h-12 px-6 text-sm border-0 border-b border-slate-300    bg-white">
              {item.email}
            </td>
            <td className="h-12 px-6 text-sm border-0 border-b border-slate-300  bg-white">
            {item.status === 'pending' ? <span className="text-cyan-500 bg-cyan-50 py-1 px-2 rounded-full">Pending</span> : <>
            <span className="text-red-500 bg-red-50 font-medium py-1 px-2 rounded-full">Rejected </span> <span onClick={() => setIsOpen(true)} className="text-cyan-600 bg-cyan-100 py-2 px-2 text-xl ml-2 hover:bg-cyan-200 rounded-full font-bold"><FaRegEye className="inline-block"/></span>
            </>} 
            <FeedbackModal
            isOpen={isOpen}
            closeModal={closeModal}
            feedback={item.feedback}
            />
            </td>
          
       
          </tr>)
           }
           
          </tbody>
        </table>
        </div>
    );
};



export default ActivityLog;