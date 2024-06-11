import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const SingleClass = ({ item }) => {
  const { className, level, duration, details, teachers, photo } = item;
  return (
    <div className="flex flex-col lg:flex-row overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 ">
      {/*  <!-- Image --> */}
      <figure className=" w-full lg:w-[250px]">
        <img
          src={photo}
          alt="card image"
          className="object-cover w-full h-[200px] lg:min-h-full aspect-auto"
        />
      </figure>
      {/*  <!-- Body--> */}
      <div className="flex-1 p-6 sm:mx-6 sm:px-0">
        <header className="flex gap-4 mb-4">
          <div>
            <h3 className="text-xl font-medium text-slate-700">{className}</h3>
          </div>
        </header>
        <p>{details}</p>
        <div>
          <h2 className="text-xl font-medium">Trainer Who took this Class</h2>
          <div className="flex flex-col mt-3 justify-center">
            <div className="flex space-x-5">
              {
                teachers && teachers.length === 0 ? 'Currently No Teacher' : undefined
              }
             {
              teachers.slice(0,5).map(teacher => <Link
              to={`/trainer-details/${teacher.id}`}
              key={teacher.id}>
                   <img
                alt=""
                className="w-10 h-10 rounded-full "
                src={teacher.image}
              />
              </Link>)
             }
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleClass.propTypes = {
  item: PropTypes.object,
};

export default SingleClass;
