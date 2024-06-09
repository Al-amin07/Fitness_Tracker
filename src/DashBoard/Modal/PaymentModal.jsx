import PropTypes from "prop-types";
import {
  Dialog,
  Transition,
  TransitionChild,
  
  DialogPanel,
} from "@headlessui/react";
import { Fragment } from "react";
import useAuth from "../../Hooks/useAuth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../Pages/NavPages/AllTrainers/CheckoutForm";

const PaymentModal = ({
  closeModal,
  isOpen,
  classes,
  trainer,
  slot,
  pack,
  slotIndex
}) => {
  let price ;
  const { user } = useAuth();
  const {
    full_name,
    
  } = trainer;

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRET)

  if (pack === "basic") {
    price = 10;
  } else if (pack === "standard") {
    price = 50;
  } else {
    price = 100;
  }

  console.log(classes);

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
              
                <div className="mb-6 ">
                  <div className="overflow-hidden   rounded bg-white text-slate-500  shadow-slate-200">
                    <div className="">
                      <h3 className="mb-2 text-2xl font-medium text-slate-700">
                        Trainer Name : {full_name}
                      </h3>
                      <p className="text-slate-700">Slot : {slot}</p>
                      <p className="text-slate-700">Package : {pack}</p>
                      <p className="text-slate-700">Class : {classes?.map((item, ind) => <span key={ind} className="font-medium mr-4">{item}</span>)}</p>
                      <p className=" text-2xl text-cyan-700">
                        Price : ${price}
                      </p>
                    </div>
                    <div className="mt-3">
                      <h2 className="text-2xl font-medium text-slate-800 mb-1">
                        Purchaser Info :{" "}
                      </h2>
                      <h2 className="text-xl font-medium text-slate-700">
                        Name : {user?.displayName}
                      </h2>
                      <h2 className="text-lg text-slate-700">
                        Email : {user?.email}
                      </h2>
                    </div>
                  </div>
                </div>
                <Elements  stripe={stripePromise}>
                  <CheckoutForm 
                  closeModal={closeModal} 
                  classes={classes}
                  slot={slot}
                  trainer={trainer}
                  slotIndex={slotIndex}
                  price={price}/>
                </Elements>
               
               
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

PaymentModal.propTypes = {
  modalHandler: PropTypes.func,
  closeModal: PropTypes.func,
  trainer: PropTypes.object,
  slot: PropTypes.string,
  pack: PropTypes.string,
  classes: PropTypes.string,
  slotIndex: PropTypes.number,

  isOpen: PropTypes.bool,
};

export default PaymentModal;
