export interface PostInterface {
  id: string;
  title: string;
  content: string;
  created: string;
  isPublished: boolean;
  userId: string;
  imageUrl: string[];
  author?: string;
  formattedDate?: string;
}
export interface CommentInterface {
  author: string | null;
  created: string;
  id: string;
  message: string;
  userId: string;
  postId: string;
  isPublished?: boolean;
}
export interface UserInterface {
  nickname: string | null;
  role?: string | null;
  id?: string | null;
}
