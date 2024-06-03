import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";



const useAllClass = () => {
    const axiosCommon = useAxiosCommon();
    const { data: classes = [], refetch, isLoading } = useQuery({
        queryKey: ['class'],
        queryFn: async() => {
            const { data } = await axiosCommon.get('/classes');
           return data

        }
    })

    return [classes,refetch, isLoading ]
};

export default useAllClass;