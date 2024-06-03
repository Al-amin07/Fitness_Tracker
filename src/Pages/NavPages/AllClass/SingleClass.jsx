
import PropTypes from 'prop-types'
const SingleClass = ({item}) => {
    const { className, level, duration, details, teachers, photo } = item
    return (
        <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className=" w-[250px]">
          <img
            src={photo}
            alt="card image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
          
            <div>
              <h3 className="text-xl font-medium text-slate-700">
              {className}
              </h3>
             
            </div>
          </header>
          <p>
          {details}
          </p>
          <div>
            <h2 className='text-xl font-medium'>Trainer Who took this Class</h2>
          </div>
        </div>
      </div>
    );
};

SingleClass.propTypes = {
    item: PropTypes.object
}

export default SingleClass;