import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HomeButton from '@/components/atoms/homebutton';


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

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
        <h1>{product.prodName}</h1>
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
          <button>Add to Cart</button>
        </ul>
        </div>
        <HomeButton />
        </div>
    );
};

export default ProductPage;
