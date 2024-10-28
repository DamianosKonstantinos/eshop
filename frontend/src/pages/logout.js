import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    sessionStorage.removeItem('user');
    router.push('/');
  }, [router]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
