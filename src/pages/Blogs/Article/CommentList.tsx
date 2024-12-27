import React, { useEffect, useState } from "react";
import { fetchDbComments } from "@/api/Comments";
import { fetchUserById } from "@/api/Blogs";
import Comment from "./Comment";
import { CommentInterface } from "@/interface";
const MemoizedComment = React.memo(Comment);
export default function CommentList({
  postId,
  refreshTrigger,
}: {
  postId: string;
  refreshTrigger: any;
}) {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const setComments = (blogs: any) => {
    setCommentList(blogs);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchComments = async () => {
      const url = `https://blog-api-backend-production-6489.up.railway.app/api/${postId}/comments`;
      try {
        const comments = await fetchDbComments(url);
        if (comments) {
          const commentsWithAuthors = await Promise.all(
            comments.map(async (comment: CommentInterface) => {
              const userResponse = await fetchUserById(comment.userId);
              return {
                ...comment,
                author: userResponse ? userResponse.nickname : "Unknown",
              };
            }),
          );
          setComments(commentsWithAuthors);
        }
      } catch (error: any) {
        console.error("An error occurred:", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchComments();
  }, [postId, refreshTrigger]);
  return (
    <>
      {isLoading ? (
        <div className="flex  items-center justify-center">
          <p className="loading w-10"></p>
        </div>
      ) : commentList && commentList.length > 0 ? (
        commentList.map((comment: CommentInterface) => {
          return <MemoizedComment comment={comment} key={comment.id} />;
        })
      ) : (
        <div>No comments available</div>
      )}
    </>
  );
}
