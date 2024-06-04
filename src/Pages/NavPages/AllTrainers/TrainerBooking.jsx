import { Link, useParams, useSearchParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import './Table.css'
import { useState } from "react";
import Button from "../../Shared/Button";
const TrainerBooking = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pack, setPack] = useState('basic')
  const index = searchParams.get("index");
  console.log(index);
  const { data: trainer = {} } = useQuery({
    queryKey: ["trainer", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/trainer/${id}`);
      return data;
    },
  });
//   console.log(package);
  const {
    full_name,
    email,
    age,
    years_of_experience,
    profile_image,
    available_slot,
    skills,
  } = trainer;
  console.log(trainer);
  return (
    <div className="flex gap-10">
      <div className="border-2 p-6 w-[500px]">
        <h2 className="text-2xl font-medium ">
          Trainer Name : {trainer.full_name}
        </h2>
        <h2>Selected Slot : {available_slot[index]}</h2>
        <h2>
          Classes :{" "}
          {skills.map((element, ind) => (
            <span key={ind + 2} className="mr-4">
              {element}
            </span>
          ))}
        </h2>
        <div className="flex gap-6 items-center my-6">
            <h1 className="text-xl font-medium">Package : </h1>
            <select onChange={(e) => {
                console.log(e.target.value);
                setPack(e.target.value)
            }} required className=" py-2 px-3 w-1/2 border-2 rounded-lg" name="" id="">
            {/* <option value="" disabled selected hidden>Select Package</option> */}
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>

        </select>
        
        </div>
       <div>
       <Link to={`/payment/${id}?slot=${index}&&package=${pack}`} className="mx-auto w-full">
        <Button text={'Join Now'}></Button>
        </Link>
       </div>
      </div>
      <div className="flex-1 border">
        <h2 className="text-2xl font-medium">Package : </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Basic Membership</th>
              <th>Standard Membership</th>
              <th>Premium Membership</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Access to gym facilities during regular operating hours</td>
              <td>All benefits of the basic membership.</td>
              <td>All benefits of the standard membership.</td>
            </tr>
            <tr>
              <td>Use of cardio and strength training equipment.</td>
              <td>
                Access to group fitness classes such as yoga, spinning, and
                Zumba.
              </td>
              <td>
                Access to personal training sessions with certified trainers
              </td>
            </tr>
            <tr>
              <td>Access to locker rooms and showers.</td>
              <td>Use of additional amenities like a sauna or steam room.</td>
              <td>
                Discounts on additional services such as massage therapy or
                nutrition counseling.
              </td>
            </tr>
            <tr>
                <td>Price $10</td>
                <td>Price $50</td>
                <td>Price $100</td>
                
            </tr>
          </tbody>
        </table>
      </div>
   
    </div>
  );
};

export default TrainerBooking;
