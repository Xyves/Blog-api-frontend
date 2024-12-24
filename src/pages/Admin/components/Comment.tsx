

export default function Comments({ comment }) {

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
