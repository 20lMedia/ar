import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="text-2xl lg:text-3xl font-headline font-bold text-primary hover:text-primary/80 transition-colors" aria-label="AR Architecture Design Studio Home">
      AR Architecture
    </Link>
  );
};
export default Logo;
