import { fetchBlogs } from "@/api/Blogs";
import BlogList from "@/pages/Admin/components/Posts";
import { PostInterface } from "@/interface.ts";

import { useEffect, useState } from "react";
export default function PostsAdmin() {
  const [blogList, setBlogList] = useState<PostInterface[]>([]);
  const setBlogs = (blogs: PostInterface[]) => {
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
