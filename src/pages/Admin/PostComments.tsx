import { fetchBlogs } from "@/api/Blogs";
import BlogList from "@/components/Admin/Posts";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function PostComments() {
  const [commentsList, setCommentList] = useState([]);
  const setComments = (blogs: any) => {
    setCommentList(blogs);
    console.log(commentsList);
  };
  const { postId } = useParams();
  // 14 posts fetch
  useEffect(() => {
    const fetchComments = async () => {
      const url = `https://blog-api-backend-production-6489.up.railway.app/api/${postId}/comments`;
      const comments = await fetchBlogs(url);
      if (comments) {
        setComments(comments);
      }
    };
    fetchComments();
  });
  return (
    <main>
      {commentsList.map((comment) => {
        return <BlogList post={comment} variant={"blog"}></BlogList>;
      })}
    </main>
  );
}
