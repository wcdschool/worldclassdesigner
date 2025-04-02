
import { Event } from './types';

export const events: Event[] = [
  {
    id: "2",
    title: "What Makes a World-Class Product Designer?",
    date: "April 3, 2025",
    time: "06:30 PM - 08:00 PM",
    location: "La Panacée, 14 Rue de l'École de Pharmacie, 34000 Montpellier",
    description: "Join us for our inaugural World Class Designer meetup in Montpellier! We'll explore what separates good designers from truly exceptional ones through insightful discussions, practical examples, and networking opportunities with local design professionals.",
    image: "/lovable-uploads/ce83ed9e-7892-4dca-94a5-95c15e115704.png",
    isPast: false,
    categories: [],
    isFree: true,
    meetupUrl: "https://www.meetup.com/world-class-designer-montpellier/",
    speakers: [
      {
        name: "Séverine Dousset",
        title: "Senior Product Designer at Ubisoft"
      },
      {
        name: "Julie Chabin",
        title: "Ex: Head of Product Design at Product Hunt"
      }
    ],
    speaker: {
      name: "Séverine Dousset",
      title: "Senior Product Designer at Ubisoft"
    }
  },
  {
    id: "1",
    title: "What Makes a World-Class Product Designer?",
    date: "April 10, 2025",
    time: "06:30 PM - 08:00 PM",
    location: "The Crocodile, 6 Rue Royer-Collard, 75005 Paris",
    description: "Join us for an insightful discussion on the qualities, skills, and mindset that separate good designers from truly world-class ones.",
    image: "/lovable-uploads/2ae50675-6df3-48bd-960e-68463cd0d3cf.png",
    isPast: false,
    categories: [],
    isFree: true,
    meetupUrl: "https://www.meetup.com/world-class-designer-paris/events/306905892/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link",
    speakers: [
      {
        name: "Antoine Valot",
        title: "Ex: Chief Customer Officer at CustomerOS"
      },
      {
        name: "Adil Mhira",
        title: "Head of Design at Renault Group"
      }
    ],
    speaker: null
  }
];
