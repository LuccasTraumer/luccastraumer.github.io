export interface ArticlePost {
  date: Date;
  title: string;
  description: SectionPost[];
  id: number;
  linkPost: string;
  tags?: string[];
  timeRead?: number;
}

export interface SectionPost {
  titleSection?: string;
  content: string;
  code?: string;
  image?: string;
  imageBy?: string;
}
