import { useQuery } from "@tanstack/react-query";

import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import SingleTrainer from "./SingleTrainer";
import useAllTrainer from "../../../Hooks/useAllTrainer";
import Loading from "../../../Loading/Loading";



const AllTrainer = () => {
    const [trainers,, isLoading] = useAllTrainer()
    console.log(trainers);
if(isLoading) return <Loading/>

    return (
        <div>
           <div className="grid grid-cols-3 gap-5">
            {
                trainers.map(trainer => <SingleTrainer 
                    key={trainer._id}
                    trainer={trainer}
                    />)
            }
           </div>
        </div>
    );
};

export default AllTrainer;
