import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

// import useAxiosCommon from "../../../Hooks/useAxiosCommon";


const useAllTrainer = () => {
    const axiosCommon = useAxiosCommon();
    const { data: trainers = [], refetch, isLoading } = useQuery({
        queryKey: ['trainer'],
        queryFn: async() => {
            const { data } = await axiosCommon.get('/trainer');
            return data;
        }
    })
    return [trainers, refetch, isLoading]
};

export default useAllTrainer;