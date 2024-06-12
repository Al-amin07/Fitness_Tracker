import PropTypes from "prop-types";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TrainerInfo = ({ trainer }) => {
  const {
    full_name,
    email,
    age,
    years_of_experience,
    profile_image,
    slots,
    skills,
    available_day,
    // Education,
    details,
  } = trainer;
  console.log(slots);
  
  return (
    

    <div className="flex flex-col lg:flex-row px-4 lg:px-16 gap-8">
      <div className="overflow-hidden  rounded-2xl flex-1 bg-white  shadow-xl shadow-slate-200">
        <div className="flex gap-4">
          <figure className="p-6 h-52 w-52   pb-0">
            <img
              src={profile_image}
              alt="user name"
              title="user name"
              className="max-w-full h-[150px]"
            />
          </figure>
          <div className="py-6 space-y-2">
            <h3 className="text-xl font-medium text-slate-700">
              Full Name : {full_name}
            </h3>
            <p className="text-lg font-medium ">Email : {email}</p>
            <p className="text-lg  ">Age : {age}</p>
            <p className="text-lg font-medium ">
              Experience : {years_of_experience}
            </p>
          </div>
        </div>
    
        <div className="p-6 border-t-2">
          <header className="mb-2">
            <p className="text-slate-400">{details}</p>
            <div className="flex justify-between items-center my-3">
              <p className="text-lg font-medium ">
                Experience : {years_of_experience}
              </p>

              <div className="flex gap-3">
                <h2 className="text-xl font-medium">Connect with : </h2>
                <FaFacebook className="text-2xl text-cyan-700" />
                <FaTwitter className="text-2xl text-cyan-300" />
                <FaLinkedin className="text-2xl text-cyan-500" />
              </div>
            </div>
            <div>
              <div>
                <h2>Skills : </h2>
                <ul className="list-disc list-inside">
                  {skills?.map((item, ind) => (
                    <li key={ind}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className=" flex-1 border rounded-2xl p-6">
        <h2 className="text-3xl font-semibold mb-6">Click on the slot for booking</h2>

        <h2 className="  my-3">
          Days : {
            available_day?.map((item, index) => <span className="font-medium" key={index}>{item.label + '  '} </span>)
          }
        </h2>
        <h2 className="text-2xl font-semibold  mb-3 text-cyan-700">
          Available Slot : {" "}
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {slots?.map((item, ind) => (
            <Link to={`/trainer-booking/${trainer._id}?slot=${item.slotName + '  ' + item.slotTime}&&index=${ind}`}  key={ind}>
            <button
            
          
            className="inline-flex h-10 w-full flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-cyan-100 px-5 text-sm font-medium tracking-wide text-cyan-500 transition duration-300 hover:bg-cyan-100 hover:text-cyan-600 focus:bg-cyan-200 focus:text-cyan-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-cyan-300 disabled:bg-cyan-100 disabled:text-cyan-400 disabled:shadow-none"
          >
            {item.slotName + '  ' + item.slotTime + 'Hour'}
          </button>
            </Link>
          ))}
        </div>
        {/* <div>
          {
            slots?.map((item, index) =>  <button
            key={index}
          
              className="inline-flex h-10 w-full flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-cyan-100 px-5 text-sm font-medium tracking-wide text-cyan-500 transition duration-300 hover:bg-cyan-100 hover:text-cyan-600 focus:bg-cyan-200 focus:text-cyan-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-cyan-300 disabled:bg-cyan-100 disabled:text-cyan-400 disabled:shadow-none"
            >
              {item.slotName}
            </button>)
          }
        </div> */}

      </div>
    </div>
  );
};

TrainerInfo.propTypes = {
  trainer: PropTypes.object,
};

export default TrainerInfo;
