import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '@/components/structure/header';
import Footer from '@/components/structure/footer';

const CreateProduct = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    prodName: '',
    description: '',
    category: '',
    price: '',
    sale: '',
    stock: '',
    imgURL: ''
  });
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
      router.push('/'); // Redirect to home if not admin
    } else {
      setUser(user);
    }
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/products', formData);
      router.push('/');
    } catch (error) {
      setError('Failed to create product');
    }
  };

  return (
    <div>
      <div>
        {error && <p className="error">{error}</p>}
        {user && user.role === 'admin' ? (
          <form onSubmit={handleFormSubmit}>
            <label>
              Product Name:
              <input
                type="text"
                name="prodName"
                value={formData.prodName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Sale:
              <input
                type="number"
                name="sale"
                value={formData.sale}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Stock:
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Create Product</button>
          </form>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CreateProduct;
