import { CommentInterface } from "@/interface";

export default function Comments({ comment }: { comment: CommentInterface }) {
  return (
    <>
      <li>
        <h1>ID: {comment.id}</h1>
        <h1>Message:{comment.message}</h1>
        <h1>Post Id:{comment.postId}</h1>
        <h1>UserId:{comment.userId}</h1>
      </li>
    </>
  );
}
