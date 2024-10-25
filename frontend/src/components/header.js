import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className = 'header-links'>
          <li><Link href="/"><Image src='/logo.svg' alt="logo of the site" width={14} height={14}/></Link></li>
          <li><Link href="/women">Women</Link></li>
          <li><Link href="/men">Men</Link></li>
          <li><Link href="/kids">Kids</Link></li>
          <li><Link href="/classic">Classic</Link></li>
          <li><Link href="/sport">Sport</Link></li>
          <li><Link href="/sale">Sale</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
