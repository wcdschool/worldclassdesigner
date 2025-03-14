
import { useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import EventSection from '@/components/EventSection';
import Footer from '@/components/Footer';
import { events } from '@/lib/data';
import { Event } from '@/lib/types';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const Index = () => {
  const upcomingEvents = events.filter((event: Event) => !event.isPast);
  const isMobile = useIsMobile();
  
  const scrollButtonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (scrollButtonRef.current) {
        if (window.scrollY > window.innerHeight) {
          scrollButtonRef.current.classList.remove('opacity-0', 'pointer-events-none');
          scrollButtonRef.current.classList.add('opacity-100');
        } else {
          scrollButtonRef.current.classList.add('opacity-0', 'pointer-events-none');
          scrollButtonRef.current.classList.remove('opacity-100');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className={cn(
        "bg-background flex-grow",
        isMobile ? "pt-[48px]" : "pt-12 md:pt-12"
      )}>
        <EventSection 
          id="upcoming"
          title="Upcoming Events" 
          subtitle="Future Gatherings" 
          events={upcomingEvents} 
        />
      </div>
      
      <Footer />
      
      <Button
        ref={scrollButtonRef}
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-6 right-6 z-50 opacity-0 transition-opacity duration-300 shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Index;
