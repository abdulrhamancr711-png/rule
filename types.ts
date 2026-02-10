
export enum Category {
  TENSES = 'Tenses',
  GRAMMAR = 'Sentence Structure',
  OTHER = 'General Rules'
}

export interface Example {
  english: string;
  explanation: string;
}

export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Structure {
  affirmative: string;
  negative: string;
  question: string;
}

export interface TableData {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface Video {
  title: string;
  youtubeId: string;
}

export interface Rule {
  id: string;
  title: string;
  category: Category;
  shortDescription: string;
  longDefinition: string;
  usage: string[];
  structure: Structure;
  examples: Example[];
  commonMistakes: { wrong: string; right: string }[];
  exercises: Exercise[];
  videos: Video[];
  additionalTables?: TableData[];
}
