export type Project = {
  name: string;
  slug: string;
  description: string;
  problem: string;
  type: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  features: string[];
  demoUrl: string;
  githubUrl?: string;
  featured: boolean;
  role: string;
  status: "En ligne";
};

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  objective?: string;
  status: "Obtenu" | "En cours";
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  context: string;
  skillsDeveloped: string[];
  responsibilities: string[];
};

export type Expertise = {
  title: string;
  description: string;
  technologies: string[];
  project: string;
};
