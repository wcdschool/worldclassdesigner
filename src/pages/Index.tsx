import { useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import EventSection from '@/components/EventSection';
import { events } from '@/lib/data';
import { Event } from '@/lib/types';

const Index = () => {
  const upcomingEvents = events.filter((event: Event) => !event.isPast);
  const pastEvents = events.filter((event: Event) => event.isPast);
  
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
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-background pt-24">
        <EventSection 
          id="upcoming"
          title="Upcoming Events" 
          subtitle="Future Gatherings" 
          events={upcomingEvents} 
        />
        
        <EventSection 
          id="past"
          title="Past Events" 
          subtitle="Previous Meetups" 
          events={pastEvents} 
        />
        
        <section id="contact" className="py-16 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Stay Updated
              </span>
              <h2 className="mt-2 mb-4">Get Notified About Future Events</h2>
              <p className="text-muted-foreground mb-6">
                Join our mailing list to receive information about upcoming events and community news.
              </p>
              
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                  <Button type="submit" className="sm:w-auto">
                    Subscribe
                  </Button>
                </div>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
        
        <footer className="py-8 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} MeetupEvents. All rights reserved.
                </p>
              </div>
              
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      
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
