import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useRole = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: role , refetch, isLoading } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async() => {
            const { data } = await axiosSecure.get(`/role/${user?.email}`)
            console.log(data.role);
            return data.role;
        }
    })
    return [role, refetch, isLoading]
};

export default useRole;