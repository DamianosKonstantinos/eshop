import React from 'react';
import { useRouter } from 'next/router';

const CheckoutButton = ({ cart }) => {
    const route = useRouter();
  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    //theoritically routes to bank environment
    route.push('/');
    localStorage.removeItem('cart');
};

  return (
    <div>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default CheckoutButton;
