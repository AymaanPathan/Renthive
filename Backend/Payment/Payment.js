const Stripe = require("stripe");

const stripe = Stripe(
  "sk_test_51QKCEXSFsPR4B5zQ03t0wZkgBP0OankOpqf2ofL1AbuAnLBzZJ0L4r51Z7wLDBw9c5eNLYVdG28dzHoU0N3sdoJT00NXq5jJOg"
);
exports.payment = async (req, res) => {
  try {
    const { totalPrice, totalGuest, resortName } = req.body;

    // Calculate the total amount
    const amount = totalPrice * totalGuest * 100; // Amount in cents

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: resortName,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:5173/Book-resort`,
      cancel_url: `http://localhost:5173/Book-resort`,
    });

    // Respond with the session ID
    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
};
