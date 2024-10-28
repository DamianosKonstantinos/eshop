import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
          const response = await axios.get(`http://localhost:8080/products/${id}`);
          setProduct(response.data);
      };

      fetchProduct();
    }
  }, [id]);

  return (
    <div>
      <h1>{product.prodName}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>ON A {product.sale}% SALE</p>
    </div>
  );
};

export default ProductPage;
