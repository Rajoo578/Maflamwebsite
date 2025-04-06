import { useContext, useEffect } from "react";
import { Footer, Navbar, PaymentForm } from "../../Component";

import { 
  LanguageProvider, 
  CheckoutPaymentContext, 
  CheckoutPaymentContextProvider 
} from "../../store";  // Importing everything from index.js


export default function Checkout() {
  const { checkoutPaymentContextDetails, loading, error } = useContext(
    CheckoutPaymentContext
  );

  // useEffect(() => {
  //   if (checkoutPaymentContextDetails) {
  //     console.log("Home Screen Details:",checkoutPaymentContextDetails);

  //   }
  // }, [checkoutPaymentContextDetails]);
  return (
    <div>
      <LanguageProvider>
        <CheckoutPaymentContextProvider>
          <PaymentForm></PaymentForm>
        </CheckoutPaymentContextProvider>
      </LanguageProvider>
    </div>
  );
}
