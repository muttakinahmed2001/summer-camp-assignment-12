import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";

 const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const languageClass = useLoaderData();
    return (
        
             
            
            <div>
                <h1 className="text-3xl">Pay to enroll class</h1> 
               
                <Elements stripe={stripePromise}>
                <CheckOutForm languageClass={languageClass}></CheckOutForm>
                </Elements>
               
            </div>


       
    );
};

export default Payment;