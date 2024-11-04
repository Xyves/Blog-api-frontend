import { fetchBlogs } from "@/api/Blogs";
import Posts from "@/Admin/components/Posts";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function PostComments() {
  const [commentsList, setCommentsList] = useState([]);
  const setComments = (comments: any) => {
    setCommentsList(comments);
    console.log(commentsList);
  };
  const { userId } = useParams();

  // 14 comments fetch
  useEffect(() => {
    const fetchPosts = async () => {
      const url = `https://blog-api-backend-production-6489.up.railway.app/api/users/${userId}/comments`;
      const comments = await fetchBlogs(url);
      if (comments) {
        setComments(comments);
      }
    };
    fetchPosts();
  });
  return (
    <main>
      {commentsList.map((comment) => {
        return <Posts comment={comment} variant={"blog"} />;
      })}
    </main>
  );
}
