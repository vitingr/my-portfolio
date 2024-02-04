export interface SkillsDataProviderProps {
  source: string;
  width: number;
  height: number;
  index: number;
}

export interface ProjectProps {
  source: string;
  title: string;
  description: string;
  technologies: any;
  index: number;
  projectLink: string;
}

export interface ContactProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}