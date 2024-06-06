// import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import TrainerInfo from "./TrainerInfo";

const TrainerDetails = () => {
  const axiosCommon = useAxiosCommon();
  const { id } = useParams();
  console.log(id);
  const { data: trainer = {} } = useQuery({
    queryKey: ["trainer", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/trainer/${id}`);
      return data;
    },
  });
  
  console.log(trainer);
  return (
    <div>
   
      <div>
        <h1>Trainer Schedule</h1>
        <div >
            <TrainerInfo trainer={trainer}/>
        </div>
       <div className="my-8 flex justify-center">
       <Link to='/be-trainer' className="my-12 mx-auto">
        
            <button className="inline-flex h-10  flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-cyan-100 px-5 text-sm font-medium tracking-wide text-cyan-600 transition duration-300 hover:bg-cyan-100 hover:text-cyan-600 focus:bg-cyan-200 focus:text-cyan-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-cyan-300 disabled:bg-cyan-100 disabled:text-cyan-400 disabled:shadow-none">Be A Trainer</button>
        </Link>
       </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
