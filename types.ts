import React from 'react';

export interface Metric {
  label: string;
  value: string;
  subtext?: string;
  icon?: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  category: 'Series' | 'Song' | 'Podcast' | 'Social Awareness';
  image: string;
  stats?: string;
  link?: string;
}

export interface DemographicData {
  name: string;
  value: number;
}

export enum ChatState {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}