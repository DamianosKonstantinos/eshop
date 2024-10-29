import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import HomeButton from '@/components/atoms/homebutton';
import Header from '@/components/structure/header';
import Footer from '@/components/structure/footer';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/products/${id}`);
          setProduct(response.data);
        } catch (error) {
          setError('Failed to fetch product');
        }
      };

      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Product added to cart');
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
        <h1>{product.prodName}</h1>
        <Image src={product.imgURL} alt={product.prodName} width={150} height={150}/>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price} - {product.sale}%</p>
        <p>Final Price: ${(product.price - (product.price * (product.sale / 100))).toFixed(2)}</p>
        <p>Stock: {product.stock}</p>
        <div>
        <h2>Reviews:</h2>
        <ul>
            {product.reviews.map((review, index) => (
            <li key={index}>{review}</li>
            ))}
          <button onClick={handleAddToCart}>Add to Cart</button>
        </ul>
        </div>
        <HomeButton />
        <Footer />
        </div>
    );
};

export default ProductPage;
