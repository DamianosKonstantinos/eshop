import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const LoginButton = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    router.push('/logout');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  const handleRegister = () => {
    router.push('/register');
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <button className='loginlink' onClick={handleLogin}>Login</button>
          <button className='registerlink' onClick={handleRegister}>Register</button>
        </>
      )}
    </div>
  );
};

export default LoginButton;
