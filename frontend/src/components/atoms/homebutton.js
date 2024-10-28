import { useRouter } from 'next/router';

const HomeButton = () => {
  const router = useRouter();

  const handleHomeRedirect = () => {
    router.push('/');
  };

  return (
    <button onClick={handleHomeRedirect}>Home</button>
  );
};

export default HomeButton;
