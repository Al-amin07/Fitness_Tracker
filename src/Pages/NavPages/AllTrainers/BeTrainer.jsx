import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

import Select from "react-select";
import GetPhoto from "../../../Components/GetPhoto";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import Swal from "sweetalert2";
const times = [
  { value: "08:00-09:00", label: "8.00AM - 9.00AM" },
  { value: "10:00-12:00", label: "10.00AM - 12.00PM" },
  { value: "13:00-15:00", label: "1.00PM - 3.00PM" },
  { value: "16:00-18:00", label: "4.00PM - 6.00PM" },
  { value: "18:00-20:00", label: "6.00PM - 8.00PM" },
  { value: "19:00-21:00", label: "7.00PM - 9.00PM" },
];

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
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const axiosCommon = useAxiosCommon();

  const handleSelectChange = (selectedOptions) => {
    setSelectedValues(selectedOptions);
    console.log(selectedOptions);
  };
  const handleSelectTime = (selectedOptions) => {
    setSelectedTimes(selectedOptions);
    console.log(selectedOptions);
  };
  // selectedValues?.forEach(item => console.log(item.label))
  const { user } = useAuth();

  const handleTrainer = async(e) => {
    let arr = [];
    e.preventDefault();
    const form = e.target;
    const full_name = form.fullname.value;
    console.log(full_name);
    const email = user?.email;
    const age = form.age.value;
    const skills = [...selectedSkills];
    //  for (const item of selectedValues) {
    //   selectedTimes.forEach((element) => {
    //     let str = item.label + " " + element.label;
    //     arr.push(str);
    //   });
    // }
    selectedValues.forEach((item) => {
      selectedTimes.forEach((element) => {
        let str = item.label + " " + element.label;
        arr.push(str);
      });
    });

    const available_slot = [...arr];
    const years_of_experience = form.experience.value;
    const details = form.details.value;
    // const image = form.image.files[0];
    const profile_image = await GetPhoto(form.image.files[0])
    const newData = {
      full_name,
      email,
      age,
      skills,
      available_slot,
      years_of_experience,
      details,
      profile_image,
      status: 'pending'
    };

    try{
        const { data } = await axiosCommon.post('/applied-trainers', newData)
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Please wait for Admin Approval",
                showConfirmButton: false,
                timer: 1000
              });
        }
    }catch(err){
        console.log(err);
    }
    // console.log(newData);
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
      <form onSubmit={handleTrainer} className="border-2 p-12 bg-emerald-50">
        <div className="grid grid-cols-6 gap-4 ">
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
              placeholder="Class Name"
              className="w-full border px-4 py-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
            />
          </div>

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
              <input
                type="checkbox"
                onChange={(e) =>
                  handleCheckboxChange(e.target.value, e.target.checked)
                }
                className="ml-2"
                name="skill"
                id="yoga"
                value={"YogaFit"}
              />{" "}
              YogaFit
              <input
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
              CardioBlast
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

          {/* Times in a Days */}
          <div className=" col-span-full sm:col-span-3">
            <label className="text-lg font-medium text-slate-600 ">
              Times in a Days
            </label>
            <Select
              onChange={handleSelectTime}
              className=""
              closeMenuOnSelect={false}
              isMulti
              options={times}
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
          <button className="inline-flex h-10 w-full flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-600 text-white px-5 text-sm font-medium tracking-wide ">
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
