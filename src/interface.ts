export interface PostInterface {
  id: string;
  title: string;
  content: string;
  created: string;
  isPublished: boolean;
  userId: string;
  imageUrl: [];
  author?: string;
}
export interface CommentInterface {
  author: string | null;
  created: Date;
  id: string;
  message: string;
  userId: string;
  postId: string;
}
