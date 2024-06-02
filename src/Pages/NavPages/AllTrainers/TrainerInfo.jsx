import PropTypes from 'prop-types'

const TrainerInfo = ({trainer}) => {
    const {full_name, email, age, years_of_experience,profile_image, available_slots, skills,   other_info } = trainer
    return (
    //     <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
    //     {/*  <!-- Image --> */}
    //     <figure>
    //       <img
    //         src="https://picsum.photos/id/101/800/600"
    //         alt="card image"
    //         className="aspect-video w-full"
    //       />
    //     </figure>
    //     {/*  <!-- Body--> */}
    //     <div className="p-6">
    //       <header className="mb-4">
    //         <h3 className="text-xl font-medium text-slate-700">
    //           The easy way to go
    //         </h3>
    //         <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
    //       </header>
    //       <p>
    //         Experience the simple pleasures of a world with no cars, and only
    //         gentle walks through palm tree forests, and fallen coconuts. An
    //         island that’s home to extraordinary cliffs, swelling oceans, and
    //         mammoth manta rays.
    //       </p>
    //     </div>
    //   </div>
    <div className="flex  overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">

    <figure className="">
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
          <p className="text-sm text-slate-400">Email:  {email}</p>
        </div>
      </header>
      <p>
        {other_info}
      </p>
    </div>
  </div>
    );
};

TrainerInfo.propTypes = {
    trainer: PropTypes.object
}

export default TrainerInfo;