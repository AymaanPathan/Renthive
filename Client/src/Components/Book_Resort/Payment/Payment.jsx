import { useContext } from "react";
import { PageBtnContext } from "../../Context/pageBtnContext";
import { loadStripe } from "@stripe/stripe-js";

// Load Stripe with your publishable key
const stripePromise = loadStripe(
  "pk_test_51QKCEXSFsPR4B5zQbzpT6YspppfqidUFyOslfEZtpdl4HZUcJDys2hV36BYwTmgJBzmGc4Gv8gsiQWQ5jSfCGjpA00dnrUj8Ca"
);

function Payment() {
  const { handlePage } = useContext(PageBtnContext);

  // Function to handle payment initiation
  const handlePayment = async () => {
    try {
      const bookingData = {
        firstName: "UserFirstName",
        lastName: "UserLastName",
        phone: "UserPhoneNumber",
        email: "UserEmail",
        duration: 2,
        totalGuest: 4,
        resortName: "Resort ABC",
        resortId: "123",
        totalPrice: 100,
      };

      // Call backend to create the session
      const response = await fetch("http://localhost:3000/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      // Check if the response is ok
      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { id: sessionId } = await response.json();

      // Log the sessionId to ensure it is being received
      console.log("Received sessionId:", sessionId);

      if (!sessionId) {
        throw new Error("Session ID is missing from backend response");
      }

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error("Stripe Checkout error:", error);
      }
    } catch (error) {
      console.error("Payment initiation error:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Complete Your Payment</h1>
      <p>Click the button below to proceed to payment via Stripe.</p>
      <button
        onClick={handlePayment}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          backgroundColor: "#6772e5",
          color: "#ffffff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Pay with Stripe
      </button>
    </div>
  );
}

export default Payment;
