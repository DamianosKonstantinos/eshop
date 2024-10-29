import Link from 'next/link';
import Image from 'next/image';
import LoginButton from '../atoms/loginbutton';
import AdminButton from '../atoms/adminbutton';

const Header = () => {

  return (
    <header>
      <nav>
        <ul className = 'header-links'>
          <li><Link href="/"><Image src='/logo.svg' alt="logo of the site" width={14} height={14}/></Link></li>
          <li><Link href="/category/women">Women</Link></li>
          <li><Link href="/category/men">Men</Link></li>
          <li><Link href="/category/kids">Kids</Link></li>
          <li><Link href="/category/classic">Classic</Link></li>
          <li><Link href="/category/sport">Sport</Link></li>
          <li><Link href="/category/sales">Sale</Link></li>
          <li><LoginButton /></li>
          <li><AdminButton /></li>
          <li><Link href="../cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
