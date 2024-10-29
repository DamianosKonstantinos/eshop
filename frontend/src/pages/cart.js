import { useEffect, useState } from 'react';
import Header from '@/components/structure/header';
import Footer from '@/components/structure/footer';
import HomeButton from '@/components/atoms/homebutton';
import Image from 'next/image';
import CheckoutButton from '@/components/atoms/checkoutbutton';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  }, []);

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <div>
      <Header />
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <h2>{item.prodName}</h2>
                <Image src={item.imgURL} alt={item.prodName} width={150} height={150} />
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <CheckoutButton />
        <HomeButton />
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
