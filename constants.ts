import { Contribution, FamilyMember, TimelineEvent, Tribute, Publication } from './types';

export const HERO_CONTENT = {
  name: "Barrister Abdur Rajjaq Siddiq",
  dates: "1949–2025",
  tagline: "A Legacy of Justice, Integrity & Service",
  subTagline: "Honouring the life, works, and continuing legacy of a visionary legal mind.",
};

export const INTRO_CONTENT = "A distinguished jurist, devoted social worker, and one of Bangladesh’s respected legal thinkers, Barrister Abdur Rajjaq Siddiq dedicated his life to justice, education, and public service. This website preserves his legacy, his contributions, and the impact he continues to make through his family and the institutions he built.";

export const TIMELINE_DATA: TimelineEvent[] = [
  { year: "1949", title: "Early Life", description: "Born in a respectable family, showing early promise in academics." },
  { year: "1972", title: "Higher Education", description: "Completed law degree with distinction from the University of Dhaka." },
  { year: "1976", title: "Called to the Bar", description: "Completed Bar-at-Law from Lincoln's Inn, London." },
  { year: "1985", title: "High Court Division", description: "Enrolled as an advocate of the High Court Division." },
  { year: "1995", title: "Social Initiatives", description: "Founded the Siddiq Education Trust for underprivileged students." },
  { year: "2010", title: "Senior Advocate", description: "Elevated to the status of Senior Advocate by the Chief Justice." },
  { year: "2025", title: "The End of an Era", description: "Passed away peacefully, leaving behind a nation in mourning." },
];

export const CONTRIBUTIONS: Contribution[] = [
  { id: '1', title: "Legal Excellence", description: "Spearheaded landmark cases that redefined constitutional interpretations and legal reforms.", iconName: 'gavel' },
  { id: '2', title: "Social Contributions", description: "Established free legal aid clinics and educational scholarships for rural communities.", iconName: 'users' },
  { id: '3', title: "Institution Building", description: "Founded the Centre for Legal Research and the Siddiq Law College.", iconName: 'building' },
  { id: '4', title: "Thought Leadership", description: "Authored three seminal books on jurisprudence and delivered over 50 keynote lectures.", iconName: 'book' },
];

export const FAMILY: FamilyMember[] = [
  { 
    name: "Dr. Ahmed Siddiq", 
    relation: "Eldest Son", 
    role: "Senior Economist", 
    description: "Continuing his father's vision through economic policy research and development.",
    imageSeed: 101
  },
  { 
    name: "Barrister Karim Siddiq", 
    relation: "Youngest Son", 
    role: "Advocate, Supreme Court", 
    description: "Walking in his father's footsteps, upholding justice in the highest courts.",
    imageSeed: 102
  },
  { 
    name: "Prof. Sarah Siddiq", 
    relation: "Daughter", 
    role: "Educationist", 
    description: "Leading the Siddiq Foundation's educational initiatives for women.",
    imageSeed: 103
  },
];

export const TRIBUTES: Tribute[] = [
  { id: '1', author: "Justice M. H. Rahman", role: "Former Chief Justice", text: "A titan of the legal fraternity. His arguments were as sharp as his heart was kind." },
  { id: '2', author: "Advocate Salma Khan", role: "Colleague", text: "He taught us that law is not just about winning cases, but about serving humanity." },
  { id: '3', author: "The Daily Star", role: "Editorial", text: "A void that will be hard to fill. Barrister Siddiq was a conscience keeper of the nation." },
];

export const PUBLICATIONS: Publication[] = [
  { id: '1', title: "Constitutional Law: A Modern Perspective", type: "Book" },
  { id: '2', title: "The Role of Judiciary in Democracy", type: "Academic Paper" },
  { id: '3', title: "Selected Judgments and Arguments", type: "Compilation" },
];