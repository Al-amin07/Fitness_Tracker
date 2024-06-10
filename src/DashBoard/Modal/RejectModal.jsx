import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
} from "@headlessui/react";

import { Fragment, useState } from "react";
const RejectModal = ({ secondModal, closeSecondModal, rejectedHandler, item }) => {
    const [value, setValue] = useState('');
    const {
        full_name,
        email,
        skills,
        years_of_experience,
        profile_image,
        details,
        age,
        available_day,
        time_in_day
      } = item;
  return (
    <Transition appear show={secondModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeSecondModal}>
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
                  Admin Feedback

           
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
                    <h2>Times In a Day : {time_in_day} Hours</h2>
                    <h2 className="">Skill in : {skills?.map((item, index) => <span className="mr-3 text-lg font-medium" key={index}>{item}</span>)}</h2>
                    <span className="text-lg font-medium mt-3 mb-2">Available Days : </span>
                     <>
                    {available_day.map((item, ind) => <span key={ind}>{item.label + ' '} </span>)}
                        </>

                </div>

          {/* <form  onSubmit={handleFeedback}> */}

          <div>



                  <div className="relative mt-3">
                    <textarea
                      id="id-01"
                      type="text"
                      name="feedback"
                      onChange={(e) => setValue(e.target.value)}
                      placeholder="Write your message"
                      rows="3"
                      required
                      className="peer relative w-full rounded border border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    ></textarea>
                    <label className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                      Write your message
                    </label>
                  </div>
                </div>

                <div className="flex mt-2 justify-around">
                  <button
                    onClick={() => rejectedHandler(value)}
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-8 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  >
                    Submit
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

RejectModal.propTypes = {
  // modalHandler: PropTypes.func,
  closeSecondModal: PropTypes.func,
  rejectedHandler: PropTypes.func,
  item: PropTypes.object,

  secondModal: PropTypes.bool,
  // item: PropTypes.object,
};

export default RejectModal;
