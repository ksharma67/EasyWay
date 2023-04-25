export interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  comments?: Comment[]; // Optional property to store the comments
}
