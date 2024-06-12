import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
} from "@headlessui/react";
import ReactStarsRating from "react-awesome-stars-rating";
// import { Rating } from '@smastrom/react-rating'

// import '@smastrom/react-rating/style.css'
import { Fragment, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ReviewModal = ({ closeModal, isOpen }) => {
  const [rating, setRating] = useState(0);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const onChange = (value) => {
    console.log(`React Stars Rating value is ${value}`);
    setRating(value);
  };

  const handleReview =async e => {
    e.preventDefault();
    
    const form = e.target;
    const details = form.details.value;
    const review = rating;
    const reviews = {
        details,
        rating,
        profession: 'Student',
        name: user?.displayName
    }

    const { data } = await axiosSecure.post('/reviews', reviews)
    console.log(data);
    if(data.insertedId){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });

          closeModal();
    }

    console.log(review, details);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-2xl mb-4 font-medium text-center leading-6 text-gray-900"
                ></DialogTitle>

                <form onSubmit={handleReview}>
                  <div className="my-4   mx-auto">
              
                    <ReactStarsRating
                      className={`flex gap-1 justify-center items-center`}
                      onChange={onChange}
                      value={rating}
                    />
                     </div>
                    <div className="flex flex-col col-span-full">
                      <label className="text-lg font-medium text-slate-600 ">
                        Feedback
                      </label>
                      <textarea
                        className="border "
                        required
                        rows="5"
                        name="details"
                        id=""
                      ></textarea>
                    </div>
                 

                  {/* <Link to="/be-trainer" className="flex my-6 w-full" > */}
                  <button
                    type="submit"
                    //   onClick={beTrainerHandler}
                    className="inline-flex w-full mt-4 mx-auto justify-center rounded-md border border-transparent bg-green-100 px-3 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  >
                    Submit
                  </button>
                </form>
                {/* </Link> */}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

ReviewModal.propTypes = {
  // modalHandler: PropTypes.func,
  closeModal: PropTypes.func,
  beTrainerHandler: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default ReviewModal;
