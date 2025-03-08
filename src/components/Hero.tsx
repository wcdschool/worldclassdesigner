
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroElement = heroRef.current;
      
      if (heroElement) {
        // Parallax effect
        heroElement.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        
        // Opacity effect
        const opacity = 1 - (scrollPosition / 700);
        heroElement.style.opacity = Math.max(opacity, 0).toString();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0"></div>
      
      {/* Light circles decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div 
        ref={heroRef}
        className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
      >
        <div className="inline-block mb-4">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
            Community Events
          </span>
        </div>
        <h1 className="mb-6 font-medium leading-none tracking-tight">
          Discover Exciting <span className="text-primary">Meetups</span> and Events
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-8">
          Join our community gatherings to learn, connect, and grow with like-minded professionals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#upcoming" 
            className={cn(
              "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:pointer-events-none disabled:opacity-50",
              "h-10 px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            View Upcoming Events
          </a>
          <a 
            href="#past" 
            className={cn(
              "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:pointer-events-none disabled:opacity-50",
              "h-10 px-6 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            )}
          >
            Past Events
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-primary hover:text-primary/80 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </div>
  );
};

export default Hero;
