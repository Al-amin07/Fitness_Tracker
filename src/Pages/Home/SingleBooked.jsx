import PropTypes from 'prop-types'

const SingleBooked = ({item}) => {
    const { className, photo, details } = item
    return (
        <div className="overflow-hidden hover:shadow-2xl rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={photo}
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
         {className}
            </h3>
            <p className="text-sm font-bold text-slate-400"> Booked : {item.booked} times</p>
          </header>
          <p>
                {details}
          </p>
        </div>
      </div>
    );
};

SingleBooked.propTypes = {
    item: PropTypes.object
}

export default SingleBooked;