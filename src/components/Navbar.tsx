
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8',
        isScrolled
          ? 'py-2 glass-panel shadow-sm'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <a 
          href="#" 
          className="transition-all duration-300"
        >
          <img 
            src="/lovable-uploads/cf3e8c0c-1af2-4f27-bb73-063b5c9c0b2d.png" 
            alt="World Class Designer Logo" 
            className="h-16 sm:h-20 w-auto"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
