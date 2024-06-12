
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import admin from '/admin.png'
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
const SingleCommunity = ({item}) => {
    const location = useLocation();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [upVote, setUpVote] = useState(0);
    const { name, email, user_image, image, description, role } = item;

    const handleVote = () => {
        console.log(location);
        if(user){
            setUpVote(upVote + 1)
        }
        else{
            Swal.fire({
                title: "You are not Login",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Here"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: location.pathname})
                }
              });
        }
        
    }

    return (
        <div className="rounded-md shadow-md border-t sm:w-96 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
                <img src={user_image} alt="" className="object-cover object-center w-12 h-12 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                <div className="-space-y-1">
                    <h2 className="text-sm font-semibold leading-none">{name}</h2>
                    <span className={`inline-block py-1 px-3 rounded-full text-xs leading-none dark:text-gray-600 uppercase ${role === 'trainer' ? 'bg-emerald-50 text-emerald-500' : 'bg-cyan-50 text-cyan-500'}`}>{role} {}</span>
                </div>
            </div>
            <button className="flex items-center gap-1" title="Open options" type="button">
            {
                role === 'trainer' ? 
                // <img className="h-8 w-8 rounded-full" src={admin} alt="" />
                <div className="bg-yellow-300 p-1 flex items-center justify-center rounded-full"><FaStar className="inline-block text-cyan-500  text-xl font-bold"/> </div>
                : 
                <img className="h-8 w-8 rounded-full" src={admin} alt="" />
            }
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                    <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                    <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                    <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                </svg>
            </button>
        </div>
        <img src={image} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
        <div className="p-3">
       
          <div className="bg-slate-200 py-1 px-5 inline-block rounded-full">
          <button onClick={handleVote} className="border-r-2 border-slate-400 pr-3"> <FaArrowUp className="text-xl font-bold inline-block"/><span className={` ${upVote > 0 ? 'inline-block' : 'hidden'}`}>Up Vote {upVote}</span></button>
            <button className="ml-2"><FaArrowDown className="text-xl font-bold inline-block"/></button>
            
          </div >
            <p className="text-slate-500  mt-2">{description.slice(0, 150)}...</p>
        </div>
    </div>
    );
};

export default SingleCommunity;