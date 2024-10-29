import CreateProduct from '@/components/functionals/createProduct';
import UserDelete from '../components/functionals/deleteuser';
import Footer from '@/components/structure/footer';
import Header from '@/components/structure/header';

const AdminConsole = () => {
  return (
    <div className="admin-console-container">
      <Header/>
      <h1>Admin Console</h1>
      <UserDelete />
      <CreateProduct />
      <Footer/>
    </div>
  );
};

export default AdminConsole;
