

import { 
  LanguageProvider, 
 
} from "../../store"; 
import PaymentForm2 from "../../Component/PaymentForm2/PaymentForm2";


export default function checkout2() {
 
  return (
    <div>
      <LanguageProvider>
       
          <PaymentForm2></PaymentForm2>
      
      </LanguageProvider>
    </div>
  );
}
