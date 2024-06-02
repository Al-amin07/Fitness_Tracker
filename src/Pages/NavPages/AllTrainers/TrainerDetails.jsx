// import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Select from "react-select";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import TrainerInfo from "./TrainerInfo";
const availableTimeSlots = [
  { label: "Monday 9am-11am", value: "Monday 9am-11am" },
  { label: "Monday 1pm-3pm", value: "Monday 1pm-3pm" },
  { label: "Tuesday 10am-12pm", value: "Tuesday 10am-12pm" },
  { label: "Wednesday 3pm-5pm", value: "Wednesday 3pm-5pm" },
  { label: "Thursday 2pm-4pm", value: "Thursday 2pm-4pm" },
  { label: "Friday 11am-1pm", value: "Friday 11am-1pm" },
  { label: "Saturday 9am-11am", value: "Saturday 9am-11am" },
  { label: "Sunday 12pm-2pm", value: "Sunday 12pm-2pm" },
];
const TrainerDetails = () => {
  const axiosCommon = useAxiosCommon();
  const { id } = useParams();
  const { data: trainer = {} } = useQuery({
    queryKey: ["trainer", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/trainer/${id}`);
      return data;
    },
  });
  console.log(trainer);
  return (
    <div>
      Trainer DEtails
      <div>
        <h1>Trainer Schedule</h1>
        <div className="flex ">
            <div className="flex-1 border-4">
            <TrainerInfo trainer={trainer}/>
            </div>
            <div className="flex-1 border-4">

            </div>
        </div>
        <Select
          options={availableTimeSlots}
          isMulti
          closeMenuOnSelect={false}
          placeholder="Select time slots..."
        />
      </div>
    </div>
  );
};

export default TrainerDetails;
