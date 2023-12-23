import Link from 'next/link';
import logoImage from '@/assets/logo.png';

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={logoImage.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>
    </header>
  );
};

export default MainHeader;
