
import { events } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">All Events</h1>
        
        <div className="space-y-8">
          {events.map((event) => (
            <div key={event.id} className="bg-card rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
              <div className="flex flex-col md:flex-row gap-6">
                {event.image && (
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="rounded-lg w-full md:w-1/3 object-cover"
                  />
                )}
                <div className="flex-1">
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Time:</strong> {event.time}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    
                    {event.speakers && event.speakers.length > 0 ? (
                      <div>
                        <p className="font-bold">Speakers:</p>
                        <ul className="list-disc ml-5 mt-1">
                          {event.speakers.map((speaker, idx) => (
                            <li key={idx}>
                              {speaker.name} - {speaker.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : event.speaker && (
                      <p><strong>Speaker:</strong> {event.speaker.name} - {event.speaker.title}</p>
                    )}
                  </div>
                  {event.meetupUrl && (
                    <Button asChild className="mt-4">
                      <a href={event.meetupUrl} target="_blank" rel="noopener noreferrer">
                        Register on Meetup
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
