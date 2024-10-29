import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/structure/header';
import Footer from '@/components/structure/footer';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    fname: '',
    lastname: '',
    role: '',
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user) {
      setError('User not signed in');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/users/${user.id}`);
      setUser(response.data);
      setFormData({
        username: response.data.username,
        password: '',
        email: response.data.email,
        fname: response.data.fname,
        lastname: response.data.lastname,
        role: response.data.role,
      });
    } catch (error) {
      setError('Failed to fetch user data');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (!user) {
      setError('User not signed in');
      return;
    }

    try {
      await axios.put(`http://localhost:8080/users/${user.id}`, formData);
      setUser({ ...user, ...formData });
      setIsEditing(false);
    } catch (error) {
      setError('Failed to update profile');
    }
  };

  return (
    <div>
      <Header />
      <div>
        {error && <p className="error">{error}</p>}
        {user ? (
          <div>
            <h1>Profile Page</h1>
            {isEditing ? (
              <form onSubmit={handleFormSubmit}>
                <label>
                  Username:
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    placeholder={user.username}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter new password"
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder={user.email}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  First Name:
                  <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    placeholder={user.fname}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    placeholder={user.lastname}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Role:
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    placeholder={user.role}
                    onChange={handleInputChange}
                  />
                </label>
                <button type="submit">Save</button>
                <button type="button" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>First Name: {user.fname}</p>
                <p>Last Name: {user.lastname}</p>
                <p>Role: {user.role}</p>
                <button onClick={() => setIsEditing(true)}>Edit Profile</button>
              </div>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
