
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <nav className="relative z-50 px-0 py-2 bg-black/80 backdrop-blur-md shadow-md">
      <div className="w-full mx-4 md:mx-16">
        <a 
          href="#" 
          className="block w-full"
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
