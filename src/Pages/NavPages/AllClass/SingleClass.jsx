import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const SingleClass = ({ item }) => {
  const { className, level, duration, details, teachers, photo } = item;
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
            <h3 className="text-xl font-medium text-slate-700">{className}</h3>
          </div>
        </header>
        <p>{details}</p>
        <div>
          <h2 className="text-xl font-medium">Trainer Who took this Class</h2>
          <div className="flex flex-col mt-3 justify-center">
            <div className="flex space-x-5">
             {
              teachers.map(teacher => <Link
              to={`/trainer-details/${teacher.id}`}
              key={teacher.id}>
                   <img
                alt=""
                className="w-10 h-10 rounded-full "
                src={teacher.image}
              />
              </Link>)
             }
              {/* <img
                alt=""
                className="w-10 h-10 rounded-full "
                src="https://source.unsplash.com/40x40/?portrait?2"
              />
              <img
                alt=""
                className="w-10 h-10 rounded-full "
                src="https://source.unsplash.com/40x40/?portrait?3"
              />
              <img
                alt=""
                className="w-10 h-10 rounded-full "
                src="https://source.unsplash.com/40x40/?portrait?4"
              /> */}
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
