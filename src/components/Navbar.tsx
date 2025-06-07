import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Deyote
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/#services" className="text-dark hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-dark hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#process" className="text-dark hover:text-primary transition-colors">
              Process
            </Link>
            <Link href="/#contact" className="text-dark hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 