import { useQuery } from "@tanstack/react-query";

import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import SingleTrainer from "./SingleTrainer";



const AllTrainer = () => {
    const axiosCommon = useAxiosCommon();
    
    const { data: trainers = [] } = useQuery({
        queryKey: ['trainer'],
        queryFn: async() => {
            const { data } = await axiosCommon.get('/trainer');
            return data;
        }
    })
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
