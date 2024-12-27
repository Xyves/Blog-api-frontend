import { fetchDbComments } from "@/api/Comments";
import CommentList from "@/pages/Admin/components/Comment";
import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { UserContext } from "@/main";
import { CommentInterface } from "@/interface";
export default function PostComments() {
  const { user } = useContext(UserContext);
  const [commentsList, setCommentList] = useState<CommentInterface[]>([]);
  const setComments = (comments: CommentInterface[]) => {
    setCommentList(comments);
  };
  const { postId } = useParams();
  useEffect(() => {
    const fetchComments = async () => {
      const url = `https://blog-api-backend-production-6489.up.railway.app/api/${postId}/comments`;
      try {
        const comments = await fetchDbComments(url);
        if (comments) {
          setComments(comments);
        }
      } catch (error: any) {
        console.error("An error occurred:", error.message);
      }
    };
    fetchComments();
  }, [postId]);
  if (!user || user.role !== "ADMIN") {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <main>
      {commentsList.length > 0 ? (
        commentsList.map((comment: CommentInterface) => (
          <CommentList comment={comment} key={comment.id} />
        ))
      ) : (
        <p>No comments available.</p>
      )}
    </main>
  );
}
