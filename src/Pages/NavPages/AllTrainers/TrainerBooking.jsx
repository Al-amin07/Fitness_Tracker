import { Link, useParams, useSearchParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import "./Table.css";
import { useEffect, useState } from "react";
import Button from "../../Shared/Button";
import PaymentModal from "../../../DashBoard/Modal/PaymentModal";
import Loading from "../../../Loading/Loading";
const TrainerBooking = () => {
  const { id } = useParams();
  const [value, setValue] = useState("default_value");
  const [index, setIndex] = useState(0);
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams("");
  const [pack, setPack] = useState("basic");
  
  // const index = searchParams.get("slot") || 'Helo'
  console.log(value);

  useEffect(() => {
    const paramsIndex = searchParams.get('index')
    const paramValue = searchParams.get("slot");
    if (paramValue && paramsIndex) {
      setValue(paramValue);
      setIndex(paramsIndex);
      // console.log(value, index);
    }
  }, [searchParams]);
 
  const { data: trainer = {}, isLoading } = useQuery({
    queryKey: ["trainer", id],

    queryFn: async () => {
      const { data } = await axiosSecure.get(`/trainer/${id}`);
      return data;
    },
  });
 
  const {
   
    slots
  } = trainer;
  console.log(slots);
  let slotClass = []
  if (index){
    const ind = parseInt(index)
    slotClass = slots[ind]?.classess?.filter((item) => item);
    console.log(slotClass);
  }
 

 


  const closeModal = () => {
    setIsOpen(false);
  };

  const modalHandler = () => {
    console.log("Hiiiii");
  };

  if (isLoading) return <Loading />;
  console.log(trainer);
  return (
    <div>
      <h2 className="text-3xl font-semibold text-slate-700 mb-12 text-center">Get Started with Our Affordable Packages</h2>
      <div className="flex gap-10">
        <div className="shadow-xl p-6 w-[500px]">
          <h2 className="text-2xl font-medium ">
            Trainer Name : {trainer.full_name}
          </h2>
          <h2 className="text-lg font-medium my-2">Selected Slot : {value} hours</h2>
          <h2>
            Classes :{" "}
            {slots[index]?.classess?.map((element, ind) => (
              <span key={ind + 2} className="mr-4 text-sm font-semibold">
                {element}
              </span>
            ))}
          </h2>
          <div className="flex gap-6 items-center my-6">
            <h1 className="text-xl font-medium">Package : </h1>
            <select
              onChange={(e) => {
                console.log(e.target.value);
                setPack(e.target.value);
              }}
              required
              className=" py-2 px-3 w-1/2 border-2 rounded-lg"
              name=""
              id=""
            >
              {/* <option value="" disabled selected hidden>Select Package</option> */}
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
          </div>
          {/* <div className="flex gap-6 items-center my-6">
            <h1 className="text-xl font-medium">Select Class : </h1>
            <select
              onChange={(e) => {
                console.log(e.target.value);
                setClasses(e.target.value);
              }}
              required
              className=" py-2 px-3 w-1/2 border-2 rounded-lg"
              name=""
              id=""
            >
              
            {
              skills.map(skill =>   <option key={skill._id} value={skill}>{skill}</option>)
            }
             
            </select>
          </div> */}
          <div>
            {/* to={`/payment/${id}?slot=${index}&&package=${pack}`} */}
            <Link onClick={() => setIsOpen(true)} className="mx-auto w-full">
            
              <button className="inline-flex h-10 w-full flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-cyan-100 px-5 text-sm font-medium tracking-wide text-cyan-500 transition duration-300 hover:bg-cyan-100 hover:text-cyan-600 focus:bg-cyan-200 focus:text-cyan-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-cyan-300 disabled:bg-cyan-100 disabled:text-cyan-400 disabled:shadow-none">
                Join Now
              </button>
            </Link>
            <PaymentModal
              isOpen={isOpen}
              closeModal={closeModal}
              modalHandler={modalHandler}
              trainer={trainer}
              slot={value}
              pack={pack}
              classes={slotClass}
              slotIndex={index}
            />
          </div>
        </div>
        <div className="flex-1">
          {/* <h2 className="text-2xl font-medium mb-4">Package : </h2> */}
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
                <td className="text-lg font-medium">Price : $10</td>
                <td className="text-lg font-medium">Price : $50</td>
                <td className="text-lg font-medium">Price : $100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrainerBooking;
