import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

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
      <div className='grid-container'>
        {products.map(product => (
          <div className='gridTile' key={product.id} onClick={() => router.push(`/products/${product.id}`)}>
            <h2>{product.name}</h2>
            <Image src={product.imgURL} alt={product.prodName} width={150} height={150}/>
            <p>{product.description}</p>
            <p>Price: ${(product.price - (product.price * (product.sale / 100))).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainGrid;
