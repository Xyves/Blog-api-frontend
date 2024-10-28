import React, { useEffect, useState } from "react";
import { fetchDbComments, fetchUserByCommentId } from "@/api/Comments";
import { fetchUserById } from "@/api/Blogs";
import Comment from "./Comment";
const MemoizedComment = React.memo(Comment);
export default function CommentList({ postId }) {
  console.log("Here list");
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const setComments = (blogs: any) => {
    setCommentList(blogs);
    console.log(commentList);
  };

  // 14 posts fetch
  useEffect(() => {
    setIsLoading(true);
    const fetchComments = async () => {
      const url = `https://blog-api-backend-production-6489.up.railway.app/api/${postId}/comments`;
      try {
        const comments = await fetchDbComments(url);
        if (comments) {
          const commentsWithAuthors = await Promise.all(
            comments.map(async (comment) => {
              const userResponse = await fetchUserById(comment.userId);
              return {
                ...comment,
                author: userResponse ? userResponse.nickname : "Unknown",
              };
            }),
          );
          console.log(commentsWithAuthors);
          setComments(commentsWithAuthors);
        }
      } catch (error) {
        console.error("An error occurred:", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchComments();
  }, [postId]);
  return (
    <>
      {isLoading ? (
        <div className="flex  items-center justify-center">
          <p className="loading w-10"></p>
        </div>
      ) : commentList && commentList.length > 0 ? (
        commentList.map((comment) => {
          console.log(comment);
          return <MemoizedComment comment={comment} key={comment.id} />;
        })
      ) : (
        <div>No comments available</div>
      )}
    </>
  );
}
