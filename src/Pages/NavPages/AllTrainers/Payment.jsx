import { useParams, useSearchParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [searchParams, setSearchParams] = useSearchParams();
   
    const index = searchParams.get("slot");
    const pack = searchParams.get("package");
    console.log(index, pack);
    const { data: trainer = {} } = useQuery({
      queryKey: ["trainer", id],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/trainer/${id}`);
        return data;
      },
    });
    console.log(trainer);
    return (
        <div>
            
        </div>
    );
};

export default Payment;