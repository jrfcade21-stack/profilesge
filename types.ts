import React from 'react';

export type Language = 'es' | 'en';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  details?: string;
  features?: string[];
}

export interface ValueItem {
  title: string;
  description?: string;
}

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  content: string; // Full body text
  category: string;
}

export enum SectionId {
  HOME = 'inicio',
  ABOUT = 'nosotros',
  SERVICES = 'servicios',
  BLOG = 'noticias',
  CONTACT = 'contacto',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}