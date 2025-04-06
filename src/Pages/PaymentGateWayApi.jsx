// import React, { useEffect, useRef, useState } from 'react';
// import axios from 'axios';
// import "./PaymentGateWayApi.css"

// const PaymentGateWayApi = () => {
//   const formRef = useRef(null);
//   const [paymentErrors, setPaymentErrors] = useState('');

//   useEffect(() => {
//     if (window.paylib && formRef.current) {
//       window.paylib.inlineForm({
//         key: 'C7KMDH-7QRG6H-MPKQN6-HQN9M2',
//         autosubmit: false, // Disable auto-submit to handle manually with Axios
//         callback: function (response) {
//           if (response.error) {
//             setPaymentErrors(response.error.message);
//             window.paylib.handleError(document.getElementById('paymentErrors'), response);
//           }
//         },
//       });
//     }
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent default form submission

//     try {
//       const formData = new FormData(formRef.current);

//       // Send form data to your API using Axios
//       const response = await axios.post('https://yourserver.com/payment', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Handle success response
//       console.log('Payment successful', response.data);
//       // Add any success handling logic here

//     } catch (error) {
//       // Handle errors from the API
//       console.error('Payment failed', error.response?.data || error.message);
//       setPaymentErrors(error.response?.data?.message || 'An error occurred during payment.');
//     }
//   };

//   return (
//     <form id="payform" ref={formRef} onSubmit={handleSubmit}>
//       <span id="paymentErrors">{paymentErrors}</span>
//       <div className="row">
//         <label>Card Number</label>
//         <input type="text" data-paylib="number" size="20" />
//       </div>
//       <div className="row">
//         <label>Expiry Date (MM/YYYY)</label>
//         <input type="text" data-paylib="expmonth" size="2" />
//         <input type="text" data-paylib="expyear" size="4" />
//       </div>
//       <div className="row">
//         <label>Security Code</label>
//         <input type="text" data-paylib="cvv" size="4" />
//       </div>
//       <input type="submit" value="Place order" />
//     </form>
//   );
// };

// export default PaymentGateWayApi;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './PaymentGateWayApi.css'; // Optional: For custom styling

// const PaymentGateWayApi = () => {
//   const [paymentData, setPaymentData] = useState({
//     amount: '',
//     currency: 'USD',
//     customerName: '',
//     customerEmail: '',
//     customerPhone: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handlePayment = async () => {
//     try {
//       // Prepare payment request data
//       const requestData = {
//         profile_id: "58469",
//         payment_token: "D2w6OKit7x63DNVvd2r1",
//         tran_type: "sale",
//         tran_class: "ecom",
//         cart_id: "99",
//         // cart_currency: "SAR",
//         // cart_amount: "2154",
//         cart_description: "cart_1111",
//         return: "https://webhook.site/6a2a359b-5dfc-43c7-a803-64b55d4cf092",
//         callback: "https://webhook.site/6a2a359b-5dfc-43c7-a803-64b55d4cf092",
//         cart_currency: paymentData.currency,
//         cart_amount: paymentData.amount,
//         customer_details: {
//           name: paymentData.customerName,
//           email: paymentData.customerEmail,
//           phone: paymentData.customerPhone,
//           city: 'Dubai',
//           country: 'AE',
//         },
//         return_url: 'https://your-return-url.com', // Replace with your return URL
//         callback_url: 'https://your-callback-url.com', // Replace with your callback URL
//       };

//       // Send payment data to your server
//       const response = await axios.post('https://yourserver.com/payment', requestData);

//       if (response.data.redirect_url) {
//         // Use ClickPay paylib.js to redirect to the payment page
//         const redirectUrl = response.data.redirect_url;
//         window.paylib.inlineRedirection(redirectUrl);
//       } else {
//         console.error('Error in creating payment session');
//       }
//     } catch (error) {
//       console.error('Payment failed', error);
//     }
//   };

//   return (
//     <div className="payment-form-container">
//       <h2>Payment Form</h2>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <div className="form-group">
//           <label>Amount</label>
//           <input
//             type="number"
//             name="amount"
//             value={paymentData.amount}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Customer Name</label>
//           <input
//             type="text"
//             name="customerName"
//             value={paymentData.customerName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Customer Email</label>
//           <input
//             type="email"
//             name="customerEmail"
//             value={paymentData.customerEmail}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Customer Phone</label>
//           <input
//             type="text"
//             name="customerPhone"
//             value={paymentData.customerPhone}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="button" onClick={handlePayment}>
//           Pay Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PaymentGateWayApi;
import React, { useState } from 'react';
import axios from 'axios';
import './PaymentGateWayApi.css'; // Optional: For custom styling

const PaymentGateWayApi = () => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    currency: 'USD',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePayment = async () => {
    try {
      // Prepare payment request data
      const requestData = {
        profile_id: "58469",
        payment_token: "D2w6OKit7x63DNVvd2r1",
        tran_type: "sale",
        tran_class: "ecom",
        cart_id: "99",
        cart_description: "cart_1111",
        return: "https://webhook.site/6a2a359b-5dfc-43c7-a803-64b55d4cf092",
        callback: "https://webhook.site/6a2a359b-5dfc-43c7-a803-64b55d4cf092",
        cart_currency: paymentData.currency,
        cart_amount: paymentData.amount,
        customer_details: {
          name: paymentData.customerName,
          email: paymentData.customerEmail,
          phone: paymentData.customerPhone,
          city: 'Dubai',
          country: 'AE',
        },
        card_details: {
          number: paymentData.cardNumber,
          exp_month: paymentData.expMonth,
          exp_year: paymentData.expYear,
          cvv: paymentData.cvv
        },
        return_url: 'https://your-return-url.com', // Replace with your return URL
        callback_url: 'https://your-callback-url.com', // Replace with your callback URL
      };

      // Send payment data to your server
      const response = await axios.post('https://yourserver.com/payment', requestData);

      console.log('Response Data:', response.data);

      if (response.data.redirect_url) {
        // Use ClickPay paylib.js to redirect to the payment page
        const redirectUrl = response.data.redirect_url;
        window.paylib.inlineRedirection(redirectUrl);
      } else {
        console.error('Error in creating payment session', response.data);
      }
    } catch (error) {
      console.error('Payment failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="payment-form-container">
      <h2>Payment Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={paymentData.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Customer Name</label>
          <input
            type="text"
            name="customerName"
            value={paymentData.customerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Customer Email</label>
          <input
            type="email"
            name="customerEmail"
            value={paymentData.customerEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Customer Phone</label>
          <input
            type="text"
            name="customerPhone"
            value={paymentData.customerPhone}
            onChange={handleChange}
            required
          />
        </div> */}

        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleChange}
            required
            size="20"
          />
        </div>

        <div className="form-group">
          <label>Expiry Date (MM/YYYY)</label>
          <input
            type="text"
            name="expMonth"
            value={paymentData.expMonth}
            onChange={handleChange}
            required
            size="2"
            placeholder="MM"
          />
          <input
            type="text"
            name="expYear"
            value={paymentData.expYear}
            onChange={handleChange}
            required
            size="4"
            placeholder="YYYY"
          />
        </div>

        <div className="form-group">
          <label>Security Code</label>
          <input
            type="text"
            name="cvv"
            value={paymentData.cvv}
            onChange={handleChange}
            required
            size="4"
          />
        </div>

        <button type="button" onClick={handlePayment}>
          Place order
        </button>
      </form>
    </div>
  );
};

export default PaymentGateWayApi;
