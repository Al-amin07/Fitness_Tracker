import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
} from "@headlessui/react";
import { Fragment } from "react";

const DetailsModal = ({ closeModal, isOpen, modalHandler, item }) => {
  const {
    full_name,
    email,
    skills,
    years_of_experience,
    profile_image,
    details,
    age,
    available_slot
  } = item;
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
                >
                  Applicants for Trainer
                </DialogTitle>
                <div className="my-3  flex  gap-4">
                    <img className="h-20 w-20 rounded-2xl" src={profile_image} alt="" />
                 <div>
                 <h2 className="text-xl font-medium text-slate-600">Name : {full_name}</h2>
                 <p className="text-slate-500">Age : {age}</p>
                 <p className="text-slate-500">Email : {email}</p>
                 </div>
                </div>
                 <p className="text-slate-600 my-3">{details}</p>
                <div>
                    <h2>Experience : {years_of_experience}</h2>
                    <h2 className="">Skill in : {skills.map((item, index) => <span className="mr-3 text-lg font-medium" key={index}>{item}</span>)}</h2>
                    <p className="text-lg font-medium mt-3 mb-2">Available selected Slot : </p>
                     <ul>
                    {available_slot.map((item, ind) => <li key={ind}>{item}</li>)}
                        </ul>

                </div>
                <hr className="mt-8 " />
                <div className="flex mt-2 justify-around">
                  <button
                    onClick={modalHandler}
                    // onClick={() => modalHandler(item)}
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Reject
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

DetailsModal.propTypes = {
    modalHandler: PropTypes.func,
    closeModal: PropTypes.func,
  
    isOpen: PropTypes.bool,
    item: PropTypes.object,
  };
  

export default DetailsModal;
