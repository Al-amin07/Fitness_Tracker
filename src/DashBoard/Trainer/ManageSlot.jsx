import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import SlotRow from "./SlotRow";
import Loading from "../../Loading/Loading";
import { useState } from "react";


const ManageSlot = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // console.log(user);
    const {  data: trainer = {}, refetch, isLoading } = useQuery({
        queryKey: ['slots', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/trainers/${user?.email}`);
            return data 
        }
    })

    const {  slots } = trainer;

    const handleDelete = (item, index) => {
     
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const { data: updateData } = await axiosSecure.put(`/trainer/slot/${user?.email}?index=${index}`)
                console.log(updateData);
                if(updateData.modifiedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Slot has been deleted.",
                        icon: "success"
                      });
                }
            
            }
          });
    }
    console.log(trainer);
    if(isLoading) return <Loading/>
    return (
        <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8">Manage Your Slot</h2>
            <table
          className="w-full text-left border border-separate rounded border-slate-200"
          cellspacing="0"
        >
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-0 border-b  border-slate-200 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Serial
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-0 border-b  border-slate-200 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Slot Name
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-0 border-b  border-slate-200 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Duration
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-0 border-b  border-slate-200 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Status
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-0 border-b  border-slate-200 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Booking Details
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-0 border-b  border-slate-200 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Delete Slot
              </th>
              
            </tr>
           {
            slots?.map((item, index) => <SlotRow 
            item={item} 
            key={index}
            index={index}
            // closeModal={closeModal}
            handleDelete={handleDelete}
            // isOpen={isOpen}
            // setIsOpen={setIsOpen}
            />)
           }
           
          </tbody>
        </table>
        </div>
    );
};

export default ManageSlot;