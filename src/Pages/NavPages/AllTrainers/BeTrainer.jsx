import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

import GetPhoto from "../../../Components/GetPhoto";
// import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import Swal from "sweetalert2";

import Select from "react-select";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const fitnessSkills = [
  { value: "hiit", label: "HIIT" },
  { value: "yoga", label: "Yoga" },
  { value: "zumba", label: "Zumba" },
  { value: "pilates", label: "Pilates" },
  { value: "spinning", label: "Spinning" },
  { value: "bootcamp", label: "Bootcamp" },
  { value: "crossfit", label: "CrossFit" },
  { value: "kickboxing", label: "Kickboxing" },
  { value: "barre", label: "Barre" },
  
]


const options = [
  { value: "sun", label: "Sun" },
  { value: "mon", label: "Mon" },
  { value: "tue", label: "Tue" },
  { value: "wed", label: "Wed" },
  { value: "thu", label: "Thu" },
  { value: "fri", label: "Fri" },
  { value: "sat", label: "Sat" },
];
const BeTrainer = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();
  
  const axiosSecure = useAxiosSecure()
  // const [classes,, isLoading] = useAllClass();

  const handleSelectChange = (selectedOptions) => {
    setSelectedValues(selectedOptions);
    console.log(selectedOptions);
  };

  // selectedValues?.forEach(item => console.log(item.label))
  const { user } = useAuth();

  const handleTrainer = async(e) => {
    
    e.preventDefault();
    const form = e.target;
    const full_name = form.fullname.value;
    console.log(full_name);
    const email = user?.email;
    const age = form.age.value;
    const available_day = [...selectedValues]
    const time_in_day = form.availabletime.value;
    const skills = [...selectedSkills];
    const years_of_experience = form.experience.value;
    const details = form.details.value;
    // const image = form.image.files[0];
    const profile_image = await GetPhoto(form.image.files[0])
    const newData = {
      full_name,
      email,
      age,
      skills,
      available_day,
      time_in_day,
      years_of_experience,
      details,
      profile_image,
      status: 'pending'
    };
    console.log(newData);

    try{
        const { data } = await axiosSecure.post('/applied-trainers', newData)
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Please wait for Admin Approval",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/all-trainer')
        }
    }catch(err){
        console.log(err);
    }
   
  };

  const handleCheckboxChange = (value, isChecked) => {
    const newSelectedValues = isChecked
      ? [...selectedSkills, value] // Add value if checked
      : selectedSkills.filter((item) => item !== value); // Remove value if unchecked
    setSelectedSkills(newSelectedValues);
    console.log(newSelectedValues);
  };

  return (
    <div>
      <form onSubmit={handleTrainer} className=" p-12 bg-cyan-50">

        <div className="grid grid-cols-6 gap-4 ">

          {/* name */}
          <div className="col-span-full sm:col-span-3">
          <label className="text-lg font-medium text-slate-600 mb-2">
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              name="fullname"
              required
              placeholder="Full Name"
              className="w-full border px-4 py-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>

          {/* Email */}
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

          {/* Age */}
          <div className="col-span-full sm:col-span-3">
            <label className="text-lg font-medium text-slate-600 mb-2">
              Age
            </label>
            <input
              id="classname"
              type="number"
              name="age"
              required
              placeholder="Class Name"
              className="w-full border px-4 py-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>

          {/* Image */}
          <div className="flex flex-col col-span-full sm:col-span-3">
            <label className="text-lg font-medium text-slate-600 ">
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

          {/* Skills */}
          <div className=" flex items-center col-span-full sm:col-span-3">
            <div>
              <label className="text-lg font-medium text-slate-600 ">
                Skills :
              </label>
            
              <div className=" grid grid-cols-5 gap-2">
                {
                  fitnessSkills.map((cla, ind) => <div className="flex gap-1 items-center" key={ind}>
                   <input
                type="checkbox"
                onChange={(e) =>
                  handleCheckboxChange(e.target.value, e.target.checked)
                }
                className="ml-2"
                name="skill"
                id="yoga"
                value={cla.value}
              />{" "}
              {cla.label}
                  </div>)
                }
              </div>
              {/* <input
                className="ml-2"
                type="checkbox"
                name="skill"
                id="crossFitXtreme"
                onChange={(e) =>
                  handleCheckboxChange(e.target.value, e.target.checked)
                }
                value={"CrossFitXtreme"}
              />{" "}
              CrossFitXtreme
              <input
                type="checkbox"
                className="ml-2"
                name="skill"
                id="cardioBlast"
                onChange={(e) =>
                  handleCheckboxChange(e.target.value, e.target.checked)
                }
                value={"CardioBlast"}
              />{" "}
              CardioBlast */}
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
              className="w-full border px-4 py-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>

          {/*  Available Days */}
          <div className=" col-span-full sm:col-span-3">
            <label className="text-lg font-medium text-slate-600 ">
              Available Days
            </label>
            <Select
              onChange={handleSelectChange}
              className=""
              closeMenuOnSelect={false}
              isMulti
              options={options}
            />
          </div>

              {/* Time in a day */}
          <div className="col-span-full sm:col-span-3">
            <label className="text-lg font-medium text-slate-600 mb-2">
            Available Time in a Days
            </label>
            <input
              type="number"
              name="availabletime"
              required
              placeholder=""
              className="w-full border px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col col-span-full sm:col-span-6">
            <label className="text-lg font-medium text-slate-600 ">
              Details
            </label>
            <textarea
              className="border "
              required
              rows="5"
              name="details"
              id=""
            ></textarea>
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

export default BeTrainer;

// const handleCheckboxChange = (value, isChecked) => {
//     const newSelectedValues = isChecked
//       ? [...selectedValues, value]  // Add value if checked
//       : selectedValues.filter((item) => item !== value); // Remove value if unchecked
//     setSelectedValues(newSelectedValues);
//   };

{
  /* <div>
<label>
  <input
    type="checkbox"
    value="option1"
    onChange={(e) => handleCheckboxChange(e.target.value, e.target.checked)}
  />
  Option 1
</label>
<label>
  <input
    type="checkbox"
    value="option2"
    onChange={(e) => handleCheckboxChange(e.target.value, e.target.checked)}
  />
  Option 2
</label>
{/* Add more checkboxes as needed */
}
// </div> */}
