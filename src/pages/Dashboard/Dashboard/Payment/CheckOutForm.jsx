import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../providers/AuthProvider";


const CheckOutForm = ({ languageClass }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  console.log(languageClass)
  const { price, AvailableSeat } = languageClass;
  console.log(price,AvailableSeat)
   

  useEffect(() => {

    axiosSecure.post('/create-payment-intent', { price, AvailableSeat })
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret);
      }
      )
  }, [])


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      console.log('error', error)
      setCardError(error.message);
    }
    else {
      console.log('payment method', paymentMethod)
      setCardError('')
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous'
          },
        },
      },
    );

    if (confirmError) {
      console.log(confirmError)
    }
    console.log(paymentIntent)
  }
  return (
    <> <form className="w-2/3 ml-4 mt-4" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-outline btn-warning btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
      {cardError && <p className="text-red-600 ml-4">{cardError}</p>}
    </>

  );
};

export default CheckOutForm;