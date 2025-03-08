
import { Event } from './types';

export const events: Event[] = [
  {
    id: "2",
    title: "What Makes a World-Class Designer?",
    date: "April 3, 2024",
    time: "06:30 PM - 08:00 PM",
    location: "Montpellier, France (TBD)",
    description: "Join us for our inaugural World Class Designer meetup in Montpellier! We'll explore what separates good designers from truly exceptional ones through insightful discussions, practical examples, and networking opportunities with local design professionals.",
    image: "/lovable-uploads/ce83ed9e-7892-4dca-94a5-95c15e115704.png",
    isPast: false,
    categories: [],
    isFree: true,
    meetupUrl: "https://www.meetup.com/world-class-designer-montpellier/",
    speaker: {
      name: "Julie Chabin",
      title: "Ex: Head of Product Design at Product Hunt"
    }
  },
  {
    id: "1",
    title: "What Makes a World-Class Designer?",
    date: "April 8, 2024",
    time: "06:30 PM - 08:00 PM",
    location: "Paris, France (TBD)",
    description: "Join us for an insightful discussion on the qualities, skills, and mindset that separate good designers from truly world-class ones.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    isPast: false,
    categories: [],
    isFree: true,
    meetupUrl: "https://www.meetup.com/world-class-designer-paris/"
  }
];
