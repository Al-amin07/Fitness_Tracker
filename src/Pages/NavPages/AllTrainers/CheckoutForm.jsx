import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price, closeModal, classes, slot, trainer, slotIndex }) => {
  const stripe = useStripe();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [error, setError] = useState("");
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  

  useEffect(() => {
    getClientSecret(price);
  }, []);

  const getClientSecret = async (price) => {
    const { data } = await axiosSecure.post("/create-payment-intent", {
      price,
    });

    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      setProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    const { error: confireError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
    if (confireError) {
      setError(confireError);
      setProcessing(false);
      return;
    } else if (paymentIntent.status === "succeeded") {
        // setTransactionId(paymentIntent.id)

     
    }

    const payment = {
      name: user?.displayName,
      email: user?.email,
      price: price,
      className: classes,
      status: "pending",
      transactionId: paymentIntent.id,
      time: new Date().toLocaleDateString()
    };
    const bookedDetails = {
      name: user?.displayName,
      email: user?.email,
      slot: slot,
      slotIndex
    }

    const userBooked = {
      userEmail: user?.email,
      trainerName: trainer?.full_name,
      trainerEmail : trainer?.email,
      trainerImage : trainer?.profile_image,
      classes : trainer?.slots[slotIndex].classess,
      slotIndex,
      slots: trainer?.slots,
      available_day: trainer?.available_day,
      details: trainer?.details
    }

    console.log(trainer);
    
    // console.log(bookedDetails);
    const { data } = await axiosSecure.post("/payments", {payment, bookedDetails, trainer, userBooked});
    console.log(data);
    // const { data: trainerData } = await axiosSecure.put('/payments', {trainer, bookedDetails})
    // console.log(data, trainerData);
    // https://fitness-server-psi.vercel.app 
     const {paymentResult} = data;
    if(paymentResult?.insertedId){
      // const { data } = await axiosSecure.put
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank You For The Payment",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/all-trainer");
      }
    
 
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex mt-6 justify-around">
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            Pay ${price}
          </button>
          <button
            onClick={closeModal}
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </form>
      <p className="text-red-600 text-lg font-medium">{error}</p>
    </>
  );
};

CheckoutForm.propTypes = {
  price: PropTypes.number,
  closeModal: PropTypes.func,
  classes: PropTypes.string,
  slot: PropTypes.string,
  slotIndex: PropTypes.number,
  trainer: PropTypes.object,
};

export default CheckoutForm;
