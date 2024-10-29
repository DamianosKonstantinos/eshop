import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import Header from '@/components/structure/header';
import Footer from '@/components/structure/footer';

const SaleProducts = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => product.sale > 0);
    setSaleProducts(filtered);
  }, [products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/products');
      setProducts(response.data);
    } catch (error) {
      setError('Failed to fetch products');
    }
  };

  return (
    <div>
      <Header />
      <div className='grid-container'>
        {error && <p className="error">{error}</p>}
        <ul>
          {saleProducts.map(product => (
            <li className="gridTile" key={product.id} onClick={() => router.push(`/products/${product.id}`)}>
              <h2>{product.prodName}</h2>
              <Image src={product.imgURL} alt={product.prodName} width={150} height={150}/>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Sale: {product.sale}%</p>
              <p>Final Price: ${(product.price - (product.price * (product.sale / 100))).toFixed(2)}</p>
              <p>Stock: {product.stock}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default SaleProducts;
