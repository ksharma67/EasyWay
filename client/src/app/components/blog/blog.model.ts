import { Comment } from './comment.model';

export class Blog {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  comments?: Comment[];

  constructor(id: number, title: string, content: string, created_at: Date, updated_at: Date, date: Date) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
