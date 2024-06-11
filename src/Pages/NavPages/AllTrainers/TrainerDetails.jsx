// import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";

import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import TrainerInfo from "./TrainerInfo";
import { useState } from "react";
import BeTrainerModal from "../../../DashBoard/Modal/BeTrainerModal";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const TrainerDetails = () => {
  const { user } = useAuth();
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false)
  }
  
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

  const beTrainerHandler = async() => {
    const { data } = await axiosCommon.get(`/trainers-email/${user?.email}`)
   
 
    console.log(data);
    // console.log(appliedTrainer);
    if(data.result){
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "You are Already a trainer! Dont Need To Apply",
        showConfirmButton: false,
        timer: 1500
      });
      closeModal();

      
    }
    else if(data.appliedResult){
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Already Applied! Wait for admi Approval!!!",
        showConfirmButton: false,
        timer: 1500
      });
      closeModal();
    }
    else{
      navigate('/be-trainer')
      closeModal();
    }

}
  
  // console.log(trainer);
  return (
    <div>
   
      <div className="">
      
        <div >
            <TrainerInfo trainer={trainer}/>
        </div>
       <div className="my-8 flex justify-center">
       {/* <Link to='/be-trainer' className="my-12 mx-auto"> */}
        
            <button onClick={ () => setIsOpen(true)} className="inline-flex h-10  flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-cyan-100 px-5 text-sm font-medium tracking-wide text-cyan-600 transition duration-300 hover:bg-cyan-100 hover:text-cyan-600 focus:bg-cyan-200 focus:text-cyan-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-cyan-300 disabled:bg-cyan-100 disabled:text-cyan-400 disabled:shadow-none">Be A Trainer</button>
            <BeTrainerModal
            isOpen={isOpen}
            beTrainerHandler={beTrainerHandler}
            closeModal={closeModal}
            />
        {/* </Link> */}
       </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
