
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Event } from '@/lib/types';
import EventCard from './EventCard';
import {useIsMobile} from '@/hooks/use-mobile';

interface EventSectionProps {
  title: string;
  subtitle: string;
  events: Event[];
  id: string;
}

const EventSection = ({ title, subtitle, events, id }: EventSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
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
    <section id={id} className={cn(
      "scroll-mt-24",
      isMobile ? "py-12" : "py-16"
    )}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "transition-all duration-700",
          isMobile ? "mb-6" : "mb-12",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div>
            <h2 className={cn(
              "mt-1 opacity-80", 
              id === "upcoming" && "font-montserrat"
            )}>
              {title}
            </h2>
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
