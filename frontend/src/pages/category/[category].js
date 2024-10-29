import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Header from '@/components/structure/header';
import Footer from '@/components/structure/footer';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (category) {
        const filtered = products.filter(product => product.category === category);
        setFilteredProducts(filtered);
    }
  }, [category, products]);

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
          {filteredProducts.map(product => (
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

export default CategoryPage;
