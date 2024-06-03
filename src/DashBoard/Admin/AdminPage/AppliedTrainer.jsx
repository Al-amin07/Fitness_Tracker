import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AppliedTrainer = () => {
    const axiosSecure = useAxiosSecure();
    const { data: trainers = [] } = useQuery({
        queryKey: ['applied-trainers'],
        queryFn: async() => {
            const { data } = await axiosSecure.get('/applied-trainers')
            return data;
        }
    })
    console.log(trainers);
    return (
        <div>
            Applied Trainers
        </div>
    );
};

export default AppliedTrainer;