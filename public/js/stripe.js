/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51RRedASIq2fZe8idKWaAqdHyEmQYtkKua5Cs3F6Kgb2s164iNLXFTgEYccDPKR4eZrelMUdVjXDUH19QqvxyABqv00eCYo0f9J',
);

export const bookTour = async (tourId) => {
  try {
    // 1. Get Checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // 2. Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
    // 3.
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
