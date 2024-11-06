import { fetchBlogs } from "@/api/Blogs";
import BlogList from "@/pages/Admin/components/Posts";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "@/main";
export default function PostsAdmin() {
  const { user } = useContext(UserContext);

  const [blogList, setBlogList] = useState([]);
  const setBlogs = (blogs: any) => {
    setBlogList(blogs);
  };

  // 14 posts fetch
  useEffect(() => {
    const fetchPosts = async () => {
      const url =
        "https://blog-api-backend-production-6489.up.railway.app/api/posts";
      const posts = await fetchBlogs(url);
      if (posts) {
        setBlogs(posts);
        console.log(posts);
      }
    };
    fetchPosts();
  }, []);

  return (
    <main>
      {blogList.map((post) => {
        return <BlogList post={post} key={post.id}></BlogList>;
      })}
    </main>
  );
}
