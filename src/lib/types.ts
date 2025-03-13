
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  isPast: boolean;
  categories?: string[];
  isFree?: boolean;
  meetupUrl?: string;
  speakers?: {
    name: string;
    title: string;
  }[];
  speaker?: {
    name: string;
    title: string;
  } | null;
}
