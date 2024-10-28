import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import HomeButton from '@/components/atoms/homebutton';

const UserDelete = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();
  const user = JSON.parse(sessionStorage.getItem('user'));


  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user || !user.role.includes('admin')) {
      router.push('/');
    } else {
      fetchUsers();
    }
  }, [router]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users');
      setUsers(response.data);
    } catch (error) {
      setError('Failed to fetch users');
    }
  };

  const handleDelete = async (id) => {
    if (user && user.id === id) {
        alert('You cannot delete yourself.');
        return;
      }
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      setError('Failed to delete user');
    }
  };

  return (
    <div>
      <h2>User Delete</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.id} - {user.username} - {user.role}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
        <HomeButton />
      </ul>
    </div>
  );
};

export default UserDelete;
