
import { useState, useRef, useEffect } from 'react';
import { Event } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import confetti from 'canvas-confetti';

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleRSVP = () => {
    // Trigger confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3']
    });
    
    toast({
      title: "RSVP Successful!",
      description: `You've registered for "${event.title}". We've sent details to your email.`,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100); // Staggered animation
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "bg-white dark:bg-black/90 rounded-xl overflow-hidden transition-all duration-500 hover-float",
        "transform shadow-lg h-full flex flex-col border border-gray-200 dark:border-gray-800",
        isVisible ? "animate-scale-in" : "opacity-0 translate-y-10",
        isHovered && "ring-1 ring-black dark:ring-white/20"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <div 
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-transform duration-700",
            isHovered ? "scale-105" : "scale-100"
          )}
          style={{ backgroundImage: `url(${event.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80'})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          {/* Location tag */}
          {event.location.includes("Paris") && (
            <div className="absolute top-3 left-3 flex items-center bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
              <MapPin className="h-3 w-3 mr-1" />
              <span>Paris</span>
            </div>
          )}
          {event.location.includes("Montpellier") && (
            <div className="absolute top-3 left-3 flex items-center bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
              <MapPin className="h-3 w-3 mr-1" />
              <span>Montpellier</span>
            </div>
          )}
          
          {/* Free badge */}
          {event.isFree && (
            <div className="absolute top-3 right-3">
              <Badge variant="default" className="bg-green-500 hover:bg-green-600">Free</Badge>
            </div>
          )}
        </div>
        
        {/* Categories */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {event.categories?.map((category) => (
            <Badge key={category} variant="secondary" className="text-xs font-normal bg-black/70 text-white dark:bg-white/10">
              {category}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-medium leading-tight mb-2">{event.title}</h3>
        
        <div className="space-y-3 mb-4 text-sm">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{event.location}</span>
          </div>
          
          {event.speaker && (
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              {event.speaker.name === "Julie Chabin" ? (
                <Avatar className="h-6 w-6 mr-2 flex-shrink-0 border border-gray-200 dark:border-gray-700">
                  <AvatarImage 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                    alt={event.speaker.name}
                  />
                  <AvatarFallback>{event.speaker.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ) : (
                <User className="h-4 w-4 mr-2 flex-shrink-0" />
              )}
              <div>
                <span className="font-medium text-black dark:text-white">{event.speaker.name}</span>
                <span className="block text-xs mt-0.5">{event.speaker.title}</span>
              </div>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm line-clamp-3 hidden sm:block">{event.description}</p>
        
        <div className="mt-auto">
          <Button
            onClick={handleRSVP}
            className={cn(
              "w-full transition-all duration-300",
              event.isPast 
                ? "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700" 
                : "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
            )}
            disabled={event.isPast}
          >
            {event.isPast ? 'Event Ended' : 'RSVP Now'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
