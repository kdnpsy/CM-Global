export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
  size: 'small' | 'medium' | 'large' | 'wide';
  dark?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
