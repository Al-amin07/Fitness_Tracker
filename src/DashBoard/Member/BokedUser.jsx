import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Loading/Loading";
import { useState } from "react";
import ReviewModal from "../Modal/ReviewModal";


const BokedUser = () => {
    const [isOpen, setIsOpen] = useState(false)

  
    const closeModal = () => {
        setIsOpen(false)
    }
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: totalBooked = {}, isLoading } = useQuery({
        queryKey: ['booked-trainer', user?.email],
        queryFn: async() => {
            const { data } = await axiosSecure.get(`/user-booked/${user?.email}`);
            return data;
        }
    })
    console.log(totalBooked);
    const { trainerImage, trainerName, trainerEmail, slots,available_day, details} = totalBooked  ;
    if(isLoading) return <Loading></Loading>
    return (
       <div className="">
         {
            Object.keys(totalBooked).length === 0 ? <h1 className="text-3xl font-medium text-center">You Dont Booked Yet</h1> : <div className="w-4/6 mx-auto border rounded-md p-6">
            <div className="flex gap-4 items-center mb-5">
                <img className="h-24 w-24 rounded-full" src={trainerImage} alt="" />
                <div>
                    <h2 className="text-xl font-medium">Trainer Name: {trainerName}</h2>
                    <h2 className="txt-lg">Trainer Email: {trainerEmail}</h2>
                </div>
            </div>

            <p className="text-slate-500 ">{details}</p>
            <hr  className="my-4"/>


  
                <ul className="flex gap-2">
                    <li className="text-lg">Available Days : </li>
                    {
                        available_day?.map((item, ind) => <li className="text-lg font-semibold" key={ind}>{item.label}</li>)
                    }
                </ul>

                <div className="my-5">
                    <h2 className="text-xl font-semibold mb-3">Slots : </h2>
                    <ul className="space-y-5">
                        {
                            slots?.map((item, index) => <li className="flex gap-8 items-center" key={index}><span className="bg-cyan-50 text-cyan-500 py-2 px-3 rounded-full font-bold">{item.slotName + " " + item.slotTime} hours</span>
                            <span>
                                <span className="text-bg ">Classess : </span>
                                {item?.classess?.map((ite, ind) => <span
                                className="text-lg font-semibold"
                                key={ind}>{ite}</span> )}
                            </span>
                            </li>)
                        }
                    </ul>
                </div>
                <div className="flex justify-end">
                    <button onClick={() => setIsOpen(true)} className="bg-cyan-500 text-white py-2 px-5 rounded-md font-semibold">Review</button>
                    <ReviewModal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    />
                </div>
        </div>
        }
         
       </div>
    );
};

export default BokedUser;