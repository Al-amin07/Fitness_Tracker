import { useState } from "react";
import GetPhoto from "../../../Components/GetPhoto";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddNewClass = () => {
    const [seleced, setSelected] = useState('beginner');
    const axiosSecure = useAxiosSecure();
    const handleSelect = e => {
        console.log(e.target.value);
        setSelected(e.target.value)
    }

    const handleSubmit =async e => {
        e.preventDefault();
        const form = e.target;
        const className = form.name.value;
        const level = seleced;
        const duration = form.duration.value;
        const details = form.details.value;
        const image = form.image.files[0];
        const photo = await GetPhoto(image)
        console.log(className, level, duration, details, photo);
        const classDetails = {
            className,
            level,
            duration,
            details,
            photo,
            teachers: []
        }
        // console.log(classDetails);
        try{
            const { data } = await axiosSecure.post('/classes', classDetails)
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${className} added Successfylly!!!`,
                    showConfirmButton: false,
                    timer: 1000
                  });
                  form.reset();
            }
        }catch(err){
            console.log(err);
        }

        
    }

  return (
    <div className="">
        <h2 className="text-3xl font-medium text-center mb-6">Add A New Class </h2>
      <section className="p-6  bg-[#EFEFEF] w-full dark:bg-gray-100 dark:text-gray-900">
        <form
        onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="container  flex flex-col mx-auto space-y-12"
        >
          <div className="grid grid-cols-6 gap-4 ">
            
            <div className="col-span-full sm:col-span-3">
              <label
                
                className="text-lg font-medium text-slate-600 mb-2"
              >
                Class Name
              </label>
              <input
                id="classname"
                type="text"
                name="name"
                required
                placeholder="Class Name"
                className="w-full border px-4 py-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>

            <div className="flex flex-col col-span-full sm:col-span-3">
              <label
               
                className="text-lg font-medium text-slate-600 "
              >
                Upload Image
              </label>
              <input
                className="border-2 bg-white py-2 px-2 border-dotted"
                type="file"
                name="image"
                required
                id=""
              />
            </div>
            <div className="flex flex-col col-span-full sm:col-span-3">
            <label
                
                className="text-lg font-medium text-slate-600 "
              >
                Fitness Level
              </label>
                <select onChange={handleSelect} className="py-3 px-4" name="" id="">
                    <option  value="beginner">Beginner</option>
                    <option  value="intermediate">Intermediate</option>
                    <option  value="advanced">Advanced</option>
                </select>
            </div>
            <div className="flex flex-col col-span-full sm:col-span-3">
              <label
               
                className="text-lg font-medium text-slate-600 "
              >
               Duration
              </label>
              <input
                className="border  py-3 px-2 "
                type="text"
                name="duration"
                id=""
                required
              />
            </div>

         <div className="flex flex-col col-span-full sm:col-span-6">
         <label
               
                className="text-lg font-medium text-slate-600 "
              >
                Details
              </label>
              <textarea className="border "  required  rows='5'  name="details" id=""></textarea>
         </div>
          </div>
        <div>
        <button className="inline-flex h-10 w-full flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-600 text-white px-5 text-sm font-medium tracking-wide ">Submit</button>
        </div>
        </form>
      </section>
    </div>
  );
};

export default AddNewClass;
