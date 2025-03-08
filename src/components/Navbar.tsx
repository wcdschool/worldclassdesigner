
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'relative z-50 transition-all duration-300 ease-in-out px-0',
        isScrolled
          ? 'py-2 bg-black/80 backdrop-blur-md shadow-md'
          : 'py-0 bg-transparent'
      )}
    >
      <div className="w-full mx-4 md:mx-16">
        <a 
          href="#" 
          className="block w-full transition-all duration-300"
        >
          <img 
            src="/lovable-uploads/cf3e8c0c-1af2-4f27-bb73-063b5c9c0b2d.png" 
            alt="World Class Designer Logo" 
            className="w-full h-auto m-4"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
