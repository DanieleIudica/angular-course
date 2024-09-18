export interface Course {
  id: number;
  description: string;
  iconUrl: string;
  longDescription: string;
  category: Category;
  lessonsCount: number;
}
export enum Category {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}
