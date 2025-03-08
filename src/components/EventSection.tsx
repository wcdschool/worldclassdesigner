
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Event } from '@/lib/types';
import EventCard from './EventCard';

interface EventSectionProps {
  title: string;
  subtitle: string;
  events: Event[];
  id: string;
}

const EventSection = ({ title, subtitle, events, id }: EventSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [id]);
  
  return (
    <section id={id} className="py-16 scroll-mt-24">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "mb-12 transition-all duration-700", 
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div>
            <h2 className="mt-1">{title}</h2>
          </div>
          
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl">
            {subtitle === "Future Gatherings" 
              ? ""
              : "Take a look at our previous events. Don't worry if you missed them - more are coming soon!"}
          </p>
        </div>
        
        <div className="event-grid">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
