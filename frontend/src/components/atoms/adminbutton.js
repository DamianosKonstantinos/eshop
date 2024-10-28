import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const AdminButton = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleAdminConsole = () => {
    router.push('/adminconsole');
  };

  return (
    <div>
      {user && user.role.includes('admin') && (
        <button onClick={handleAdminConsole}>Admin Console</button>
      )}
    </div>
  );
};

export default AdminButton;
