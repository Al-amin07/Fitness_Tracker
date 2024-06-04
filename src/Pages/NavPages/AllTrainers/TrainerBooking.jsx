import { useParams, useSearchParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const TrainerBooking = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [searchParams, setSearchParams] = useSearchParams();
  const index = searchParams.get("index");
  console.log(index);
  const { data: trainer = {} } = useQuery({
    queryKey: ["trainer", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/trainer/${id}`);
      return data;
    },
  });
  const {
    full_name,
    email,
    age,
    years_of_experience,
    profile_image,
    available_slot,
    skills
  } = trainer;
  console.log(trainer);
  return <div  className="flex gap-10">
    <div className="border-2 p-6">
        <h2 className="text-2xl font-medium ">Trainer Name : {trainer.full_name}</h2>
        <h2>Selected Slot : {available_slot[index]}</h2>
        <h2>Classes : {skills.map((element, ind) => <span key={ind+2}  className="mr-4">{element}</span>)}</h2>
    </div>
    <div className="flex-1 bg-red-200">
        <h2 className="text-2xl font-medium">Package : </h2>
    </div>
  </div>;
};

export default TrainerBooking;
