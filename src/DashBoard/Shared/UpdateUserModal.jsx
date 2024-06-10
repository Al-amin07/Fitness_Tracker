import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import {
  Dialog,
  Listbox,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
const roles = ["guest", "host", "admin"];

const UpdateUserModal = ({ setIsOpen, isOpen, modalHandler, user }) => {
  const [selected, setSelected] = useState(user.role);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 overflow-y-auto"
        onClose={() => setIsOpen(false)}
      >
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
          <div className="flex min-h-full  items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full min-h-52 max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Update User
                </DialogTitle>
                <div className="mt-4 w-full">
                 <form  onSubmit={(e) => modalHandler(e)}>
                 <div className="col-span-full sm:col-span-3">
                    <label className="text-sm font-medium text-slate-600 mb-2">
                      Email
                    </label>
                    <input
                      id="fullname"
                      type="email"
                      name="email"
                     disabled
                    defaultValue={user.email}
                      placeholder="Full Name"
                      className="w-full border px-3 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>

                  <div className="col-span-full sm:col-span-3">
                    <label className="text-sm font-medium text-slate-600 mb-2">
                       Name
                    </label>
                    <input
                      id="fullname"
                      type="text"
                      name="name"
                        required

                      placeholder="Full Name"
                      className="w-full border px-3 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label className="text-lg font-medium text-slate-600 mb-2">
                       Profle Image
                    </label>
                    <input
                      id="photo"
                      type="file"
                      name="photo"
                        required

                      placeholder="Full Name"
                      className="w-full border px-3 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                    />
                  </div>


                  <div className="flex mt-4 justify-center gap-5">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    // onClick={() => modalHandler(selected)}
                  >
                    Save Change
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
                 </form>
                </div>
             

                
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

UpdateUserModal.propTypes = {
  user: PropTypes.object,
  modalHandler: PropTypes.func,
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default UpdateUserModal;
