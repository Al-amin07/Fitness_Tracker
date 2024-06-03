import { useQuery } from "@tanstack/react-query";

import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import SingleTrainer from "./SingleTrainer";
import useAllTrainer from "../../../Hooks/useAllTrainer";



const AllTrainer = () => {
    const [trainers] = useAllTrainer()
    console.log(trainers);

    return (
        <div>
           <div className="grid grid-cols-2 gap-12">
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
