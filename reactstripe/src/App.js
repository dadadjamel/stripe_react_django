import logo from './logo.svg';
import './App.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js/pure";
import CheckoutForm from './components/CheckoutForm';

const stripePromise = loadStripe('pk_test_');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default App;
