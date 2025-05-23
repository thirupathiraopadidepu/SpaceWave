export interface Property {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: 'commercial' | 'residential';
  features?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}