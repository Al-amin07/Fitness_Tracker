import { useState } from "react";
import Select from "react-select";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
import useAllClass from "../../Hooks/useAllClass";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// const times = [
//   { value: "08:00-09:00", label: "8.00AM - 9.00AM" },
//   { value: "10:00-12:00", label: "10.00AM - 12.00PM" },
//   { value: "13:00-15:00", label: "1.00PM - 3.00PM" },
//   { value: "16:00-18:00", label: "4.00PM - 6.00PM" },
//   { value: "18:00-20:00", label: "6.00PM - 8.00PM" },
//   { value: "19:00-21:00", label: "7.00PM - 9.00PM" },
// ];
// const options = [
//     { value: "sun", label: "Sun" },
//     { value: "mon", label: "Mon" },
//     { value: "tue", label: "Tue" },
//     { value: "wed", label: "Wed" },
//     { value: "thu", label: "Thu" },
//     { value: "fri", label: "Fri" },
//     { value: "sat", label: "Sat" },
//   ];

  const slot = [
    { value: 'Morning', label: 'Morning'},
    { value: 'After noon', label: 'After noon'},
    { value: 'Evening', label: 'Evening'},
    { value: 'Night', label: 'Night'},
  ]

const AddSlot = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [classes] = useAllClass();
    const [selectedSkills, setSelectedSkills] = useState([]);
    console.log(user);
    const {  data: trainer = {},  isLoading } = useQuery({
        queryKey: ['slots', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/trainers/${user?.email}`);
            return data 
        }
    })
    console.log(trainer);
  
    const { _id,full_name,years_of_experience,age,available_day, profile_image  ,time_in_day  } = trainer;
    console.log(available_day);
    const [selectedTimes, setSelectedTimes] = useState('')
    // const [selectedShift, setSelectedShift] = useState('')
    // const [selectedSkills, setSelectedSkills] = useState('');


    // Skills
    const handleCheckboxChange = (value, isChecked) => {
      const newSelectedValues = isChecked
        ? [...selectedSkills, value] // Add value if checked
        : selectedSkills.filter((item) => item !== value); // Remove value if unchecked
      setSelectedSkills(newSelectedValues);
      console.log(newSelectedValues);
    };
   
    const handleSelectTime = (selectedOptions) => {
        setSelectedTimes(selectedOptions);
        console.log(selectedOptions);
      };

      // Submit Function

      const handleSlot  = async e => {
        e.preventDefault();
        const form = e.target;
        const timesInDay = form.slotTime.value;
        if(timesInDay > time_in_day){
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `Your have ${time_in_day} hours left`,
            showConfirmButton: false,
            timer: 1000
          });
          return;
        }
        const newSlot = {
          slotName : selectedTimes.label,
          slotTime: timesInDay,
          classess: selectedSkills
        }
        const classDetails = {
          trainerFullName:full_name,
          trainerId: _id,
          trainerImage: profile_image,
          selectedClassess : selectedSkills
        }
        console.log(newSlot, classDetails);
        const { data } = await axiosSecure.put('/trainer/class', {newSlot, classDetails})
        if(data.modifiedCount > 0){
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Slot  added Successfylly!!!`,
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/manage-slot')
        }
      }
      console.log(trainer);
      if(isLoading) return <Loading/>
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center mb-8">Add New Slot</h2>
          
            <form onSubmit={handleSlot}  className=" p-12 bg-cyan-50">
        <div className="grid grid-cols-6 gap-4 ">


          <div className="col-span-full sm:col-span-3">
          <label className="text-lg font-medium text-slate-600 mb-2">
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              name="fullname"
            //   required
            defaultValue={full_name}
            disabled

              placeholder="Full Name"
              className="w-full border px-4 py-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>

          <div className="col-span-full sm:col-span-3">
            <label className="text-lg font-medium text-slate-600 mb-2">
              Email
            </label>
            <input
              id="classname"
              type="email"
              name="name"
              required
              disabled
              defaultValue={user?.email}
              placeholder="Class Name"
              className="w-full border px-4 py-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>

          <div className="col-span-full sm:col-span-3">
            <label className="text-lg font-medium text-slate-600 mb-2">
              Age
            </label>
            <input
              id="classname"
              type="number"
              name="age"
              required
              defaultValue={age}
            disabled

              placeholder="Class Name"
              className="w-full border px-4 py-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>

          <div className="flex flex-col col-span-full sm:col-span-3">
            <label className="text-lg font-medium  text-slate-600 ">
              Upload Image
            </label>
         <div className="flex gap-1 items-center bg-white border-2 border-dotted">
         <input
              className=" bg-white py-2 px-2 "
              type="file"
              name="image"
              required
              disabled
              id=""
            />
            <div>
              <img className="h-10 w-10 rounded-full" src={profile_image} alt="" />
            </div>
         </div>
          </div>

          


             {/* Experience */}
             <div className="col-span-full sm:col-span-3">
            <label className="text-lg font-medium text-slate-600 mb-2">
              Experience
            </label>
            <input
              type="text"
              name="experience"
              required
              placeholder=""
              defaultValue={years_of_experience}
            disabled

              className="w-full border px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>


              {/*  Available Days */}
              <div className=" col-span-full sm:col-span-3">
            <label className="text-lg font-medium text-slate-600 ">
              Available Days
            </label>
            <Select
            //   onChange={handleSelectChange}
              className=""
              defaultValue={available_day}
              closeMenuOnSelect={false}
              isMulti
              options={available_day}
            />
          </div>

          <div className="col-span-full sm:col-span-3">
            <label className="text-lg font-medium text-slate-600 mb-2">
             Slot Time in Hour
            </label>
            <input
              type="number"
              name="slotTime"
              required
              placeholder="example : 1"
              // defaultValue={years_of_experience}
         

              className="w-full border px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>

        
     

       
       
          {/* Slot Name */}
          <div className=" col-span-full sm:col-span-3">
            <label className="text-lg font-medium text-slate-600 ">
              Times in a Days
            </label>
            <Select
              onChange={handleSelectTime}
              className=""
              closeMenuOnSelect={true}
              
              options={slot}
            />
          </div>

                {/* Skills */}
                <div className=" flex items-center col-span-full sm:col-span-6">
            <div>
              <label className="text-lg font-medium text-slate-600 ">
                Classes :
              </label>
            
              <div className=" grid grid-cols-6 gap-1">
                {
                  classes.map((cla, ind) => <div className="flex gap-1 items-center" key={ind}>
                   <input
                type="checkbox"
                onChange={(e) =>
                  handleCheckboxChange(e.target.value, e.target.checked)
                }
                className="ml-2"
                name="skill"
                id="yoga"
                value={cla.className}
              />
              {cla.className}
                  </div>)
                }
              </div>
             
            </div>
          </div>

     
          
        </div>

        {/* Button */}
        <div className="mt-8">
          <button className="inline-flex h-10 w-full flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-cyan-600 text-white px-5 text-sm font-medium tracking-wide ">
            Submit
          </button>
        </div>
      </form>
        </div>
    );
};

export default AddSlot;