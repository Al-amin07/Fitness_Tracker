import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
const SingleTrainer = ({trainer}) => {
    const {full_name, email, age, years_of_experience,profile_image, available_slot, skills, details, Education } = trainer
    return (
     
  //       <div className='flex'>
  //       <div className="overflow-hidden flex-1  rounded bg-white text-slate-500 shadow-xl shadow-slate-200">
  //   {/*  <!-- Image --> */}
  //   <figure className="p-6  flex justify-center mx-auto pb-0">
  //     <span className=" h-28 w-28 ">
  //       <img
  //         src={profile_image}
  //         alt="user name"
  //         title="user name"
  //         width="100"
  //         height="100"
  //         className="max-w-full rounded-full"
  //       />
  //     </span>
  //   </figure>
  //   {/*  <!-- Body--> */}
  //   <div className="p-6">
  //     <header className="mb-2">
  //       <h3 className="text-xl font-medium text-slate-700">
  //     Full Name : {full_name}
  //       </h3>
  //      <div className="flex justify-between items-center my-3">
  //      <p className="text-lg font-medium ">Years Of Experience : {years_of_experience} years</p>
  //      <div className="flex gap-3">
  //       <FaFacebook className="text-2xl text-blue-700"/>
  //       <FaTwitter className="text-2xl text-blue-300"/>
  //       <FaLinkedin className="text-2xl text-blue-500"/>
  //      </div>
  //      </div>
        
  //     </header>
  //     <h2 className="text-2xl font-semibold  mb-3 text-emerald-700">Available Slot  </h2>
  //     <div className="grid grid-cols-3 gap-5">
  //           {
  //               available_slots?.map((item, ind) => <button
  //               key={ind}
  //               className="inline-flex h-10 w-full flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-100 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none"
  //               >{item.Day+ ' ' + item.Time}</button>)
  //           }
  //     </div>
  //   </div>
  //   {/*  <!-- Action base sized with lead icon buttons  --> */}
  //   <Link to={`/trainer-details/${trainer._id}`} className="flex justify-end gap-2 p-6 pt-0">
  //     <button className="inline-flex h-10 w-full flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-600 text-white px-5 text-sm font-medium tracking-wide ">
  //       <span className="order-2">Know More</span>
  //       <span className="relative only:-mx-5">
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="h-5 w-5"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //           strokeWidth="1.5"
  //           role="graphics-symbol"
  //           aria-labelledby="title-21 desc-21"
  //         >
  //           <title id="title-21">Icon title</title>
  //           <desc id="desc-21">
  //             A more detailed description of the icon
  //           </desc>
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  //           />
  //         </svg>
  //       </span>
  //     </button>
   
  //   </Link>
  // </div>
  
  //   </div>
  <div className='flex gap-5'>
        <div className="flex flex-1 flex-col overflow-hidden bg-white rounded shadow-md  shadow-slate-200 sm:flex-row">
       
        <figure className="flex-1">
          <img
            src={profile_image}
            alt="card image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
      
        <div className="flex-1 p-3 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
           
            <div>
              <h3 className="text-2xl font-medium text-slate-700">
               {full_name}
              </h3>
              <p className="text-sm text-slate-400"> {}</p>
            </div>
          </header>
          <p>
           {details}
          </p>
      <p className="text-sm font-medium">Experience : {years_of_experience}</p>
      <p className=" my-2">Connect With : </p>
      <div className="flex gap-3">
       <FaFacebook className="text-2xl text-blue-700"/>
       <FaTwitter className="text-2xl text-blue-300"/>
       <FaLinkedin className="text-2xl text-blue-500"/>
      </div>
          <div className='my-3'>
            <h2 className='text-lg font-medium'>Available Slots : </h2>
            <ul className='list-disc list-inside'>
                {
                   
                   available_slot.length > 3 ?  
                   available_slot?.slice(0,3)?.map((item, index) => <li key={index}>{item}</li>)
                   : 
                   available_slot?.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
          </div>
          <div>
          <Link to={`/trainer-details/${trainer._id}`} className="flex justify-end gap-2  pt-0">
     <button className="inline-flex h-10 w-full flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-600 text-white px-5 text-sm font-medium tracking-wide ">
         <span className="order-2">Know More</span>
         <span className="relative only:-mx-5">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            role="graphics-symbol"
            aria-labelledby="title-21 desc-21"
          >
            <title id="title-21">Icon title</title>
            <desc id="desc-21">
              A more detailed description of the icon
            </desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </span>
      </button>
   
    </Link>
          </div>
        </div>
      </div>
     
       </div>
    );
};

SingleTrainer.propTypes = {
    trainer: PropTypes.object
}

export default SingleTrainer;