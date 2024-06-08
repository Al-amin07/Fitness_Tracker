import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
const SingleTrainer = ({trainer}) => {
    const {full_name, email, age, years_of_experience,profile_image, slots, skills, details, Education } = trainer
    return (
     
  
  <div className='  gap-5'>
        <div className=" overflow-hidden bg-white rounded shadow-xl  shadow-slate-200 sm:flex-row">
       
        <figure className="flex-1">
          <img
            src={profile_image}
            alt="card image"
            className=" h-[220px] px-6 w-full aspect-auto"
          />
        </figure>
      
        <div className="flex-1 p-4 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
           
            <div>
              <h3 className="text-2xl font-medium text-slate-700">
               {full_name}
              </h3>
              {/* <p className="text-sm text-slate-400">{details}</p> */}
            </div>
          </header>
        
      <p className="text-sm font-medium">Experience : {years_of_experience}</p>
    <div className="flex gap-4 items-center">
    <p className=" my-2">Connect With : </p>
      <div className="flex gap-3">
       <FaFacebook className="text-2xl text-blue-700"/>
       <FaTwitter className="text-2xl text-blue-300"/>
       <FaLinkedin className="text-2xl text-blue-500"/>
      </div>
    </div>
          <div className='my-2'>
            <h2 className='text-lg font-medium'>Available Slot Name : </h2>
            <ul className='list-disc list-inside'>
                {
                   
                  
                  
                   slots?.map((item, index) => <li key={index}>{item.slotName} Slot</li>)
                }
            </ul>
          </div>
          <div>
          <Link to={`/trainer-details/${trainer._id}`} className="flex justify-end gap-2  pt-0">
     <button className="inline-flex h-10 w-full flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-cyan-600 text-white px-5 text-sm font-medium tracking-wide ">
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