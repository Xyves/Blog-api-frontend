import { fetchDbComments } from "@/api/Comments";
import CommentList from "@/pages/Admin/components/Comment";
import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { UserContext } from "@/main";
export default function PostComments() {
  const { user } = useContext(UserContext);
  const [commentsList, setCommentList] = useState([]);
  const setComments = (comments: any) => {
    setCommentList(comments);
    console.log(commentsList);
  };
  if (!user || user.role !== "ADMIN") {
    return <Navigate to="/unauthorized" replace />;
  }
  const { postId } = useParams();
  useEffect(() => {
    const fetchComments = async () => {
      console.log("Fetching comments for post:", postId);
      const url = `https://blog-api-backend-production-6489.up.railway.app/api/${postId}/comments`;
      try {
        const comments = await fetchDbComments(url);
        if (comments) {
          console.log("Fetched comments:", comments);
          setComments(comments);
        }
      } catch (error) {
        console.error("An error occurred:", error.message);
      }
    };
    fetchComments();
  }, [postId]);
  console.log(user);
  return (
    <main>
      {commentsList.length > 0 ? (
        commentsList.map((comment) => (
          <CommentList comment={comment} key={comment.id} />
        ))
      ) : (
        <p>No comments available.</p>
      )}
    </main>
  );
}
