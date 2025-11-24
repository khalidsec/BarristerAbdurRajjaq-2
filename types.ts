export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Contribution {
  id: string;
  title: string;
  description: string;
  iconName: 'gavel' | 'users' | 'building' | 'book';
}

export interface FamilyMember {
  name: string;
  relation: string;
  role: string;
  description: string;
  imageSeed: number;
}

export interface Tribute {
  id: string;
  author: string;
  role: string;
  text: string;
}

export interface Publication {
  id: string;
  title: string;
  type: string;
  link?: string;
}