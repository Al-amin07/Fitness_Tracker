import PropTypes from 'prop-types'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const TrainerInfo = ({trainer}) => {
    const {full_name, email, age, years_of_experience,profile_image, available_slots, skills, Education,  other_info } = trainer
    return (
       <div className='flex gap-6'>
        <div className="flex flex-1 flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
       
        <figure className="flex-1">
          <img
            src={profile_image}
            alt="card image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
      
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
           
            <div>
              <h3 className="text-xl font-medium text-slate-700">
               {full_name}
              </h3>
              <p className="text-sm text-slate-400"> {}</p>
            </div>
          </header>
          <p>
           {other_info}
          </p>
          <div className='my-3'>
            <h2 className='text-lg font-medium'>Education : </h2>
            <ul className='list-disc list-inside space-y-2'>
                {
                    Education?.slice(0,2)?.map((skill, ind) => <li className='text-emerald-700' key={ind+1}>{skill}</li>)
                }
            </ul>
          </div>
          <div className='my-3'>
            <h2 className='text-lg font-medium'>Skills in : </h2>
            <ul className='list-[upper-roman] list-inside'>
                {
                    skills?.map((skill, ind) => <li className='text-emerald-700' key={ind+1}>{skill}</li>)
                }
            </ul>
          </div>
        </div>
      </div>
      <div className='flex-1 bg-green-200'>

      </div>
       </div>
    
    );
};

TrainerInfo.propTypes = {
    trainer: PropTypes.object
}

export default TrainerInfo;