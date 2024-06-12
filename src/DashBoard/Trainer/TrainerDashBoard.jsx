import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Loading/Loading";

const TrainerDashBoard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: trainer = {}, isLoading } = useQuery({
    queryKey: ["trainer", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/trainers/${user.email}`);
      return data;
    },
  });
  if (isLoading) return <Loading />;
  console.log(trainer);
  return (
    <div>
      <h2 className="text-xl font-medium text-cyan-600 mb-4">
        Hi, Welcome {user?.displayName}
      </h2>
        <div>
            <div className="flex gap-4 my-6 items-center">
                <img className="h-24 w-24 rounded-md" src={trainer?.profile_image} alt="" />
                <div >
                    <h2 className="text-2xl font-medium">Name : {user?.displayName}</h2>
                    <h2 className="text-lg font-medium">Email : {user?.email}</h2>
                </div>
            </div>
       <div className="flex gap-3">
       <h2 className="px-4  py-8 rounded-sm bg-emerald-500 text-white">Available Days : {
            trainer?.available_day.map((item, index) => <span className="font-medium mr-2" key={index}>{item.label}</span>)
            }</h2>
                <h2 className="px-4 py-8 bg-cyan-500 rounded-sm text-white">Available Slots :<span className="font-medium mr-2">  {trainer?.slots.length}</span></h2>
                <h2 className="px-4 py-8 bg-purple-600 rounded-sm text-white">Times In a Day :<span className="font-medium mr-2">  {trainer?.time_in_day}</span></h2>
       </div>
        </div>
    </div>
  );
};

export default TrainerDashBoard;
