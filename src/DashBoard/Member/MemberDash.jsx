import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const MemberDash = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments = []}  = useQuery({
        queryKey: ['payment', user?.email],
        queryFn: async() => {
            const { data } = await axiosSecure.get(`/user-payment/${user?.email}
            `)
            return data;
        }
    })
    return (
        <div>
            <h2 className="text-xl font-medium">Hi, Welcome {user?.displayName}</h2>
            <div className="flex mt-12">
              
                <div className="bg-cyan-200 py-12 px-12 flex justify-center items-center flex-1">
                    <img className="h-28 w-28 rounded-full" src={user?.photoURL} alt="" />
                </div>
                <div className="flex-1 bg-emerald-50 px-12 py-12">
                    <h2 className="text-2xl font-medium">Activities : </h2>
                      <h2 className="text-lg font-medium">Booked : {payments.length}</h2>
                </div>

            </div>
            
        </div>
    );
};

export default MemberDash;