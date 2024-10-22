import React, { useEffect, useState } from "react";
import { fetchBlogs, fetchUserById } from "../../api/Blogs";

import { PostList } from "../../components/Blog/PostList";
export const Blogs = () => {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const setBlogs = (blogs: any) => {
    setBlogList(blogs);
    console.log(blogList);
  };

  // 14 posts fetch
  useEffect(() => {
    setIsLoading(true);
    const fetchPosts = async () => {
      const url =
        "https://blog-api-backend-production-6489.up.railway.app/api/posts";
      console.time("data-fetch");
      const posts = await fetchBlogs(url);
      console.timeEnd("data-fetch");
      if (posts) {
        console.log(posts);
        const data = await Promise.all(
          posts.map(async (post) => {
            const userResponse = await fetchUserById(post.userId);
            console.log("Went throught");
            return {
              ...post,
              author: userResponse.nickname, // Add userName to the post
            };
          }),
        );
        console.log(data);
        setBlogs(data);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return isLoading ? (
    <div className=" flex items-center  justify-center">
      <p className="my-32 ">Loading...</p>
    </div>
  ) : (
    <PostList posts={blogList} />
  );
};
