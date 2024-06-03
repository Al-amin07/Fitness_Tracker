import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";


const AllClass = () => {
    const axiosCommon = useAxiosCommon();
    const { data: classes = [] } = useQuery({
        queryKey: ['class'],
        queryFn: async() => {
            const { data } = await axiosCommon.get('/classess');
           return data

        }
    })
    console.log(classes);
    return (
        <div>
            
        </div>
    );
};

export default AllClass;