
export interface BrandingItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export type Material = BrandingItem;
export type DesignPrinciple = BrandingItem;

export interface Document {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  imageUrl: string; // Placeholder for visual consistency
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
