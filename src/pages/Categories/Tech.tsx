import { fetchBlogs } from "@/api/Blogs";
import { PostList } from "@/components/Blog/PostList";
import React, { useEffect, useState } from "react";

export default function Tech() {
  const [blogPosts, setBlogs] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const url = "blog-api-backend-production-6489.up.railway.app/api/games";
      const posts = await fetchBlogs(url);
      if (posts) {
        setBlogs(posts);
      }
    };
    fetchPosts();
  }, []);
  return <PostList posts={blogPosts} />;
}
