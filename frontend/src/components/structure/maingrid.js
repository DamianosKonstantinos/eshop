import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const MainGrid = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        setProducts(response.data);
      } catch (error) {
        setError('Failed to fetch products');
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map(product => (
          <div key={product.id} onClick={() => router.push(`/products/${product.id}`)}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainGrid;
