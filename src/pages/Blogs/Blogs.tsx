import React, { useEffect, useState } from "react";
import { fetchBlogs, fetchUserById } from "../../api/Blogs";

import { PostList } from "../../components/Blog/PostList";
export const Blogs = () => {
  // Fetch array with 15 posts  (2 rows * 3 1row*1 2rows *3 2 rows * 1)
  const [blogList, setBlogList] = useState([]);
  const setBlogs = (blogs: any) => {
    setBlogList(blogs);
    console.log(blogList);
  };

  // 14 posts fetch
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await fetchBlogs();
      if (posts) {
        console.log(posts);
        const data = await Promise.all(
          posts.map(async (post) => {
            const userResponse = await fetchUserById(post.userId);
            console.log("Went throught");
            // const updatedData = await userResponse.json();
            return {
              ...post,
              author: userResponse.nickname, // Add userName to the post
            };
          }),
        );
        console.log(data);
        setBlogs(data);
      }
    };
    fetchPosts();
  }, []);
  return <PostList posts={blogList} />;
};
