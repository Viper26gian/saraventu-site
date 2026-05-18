
import { LucideIcon } from 'lucide-react';

export interface Experience {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  location: string;
  schedule: string;
  suitableFor: string;
  includes: string[];
  isPremium?: boolean;
  availableIn?: string;
}
