import { useEffect, useState } from "react";
import { fetchBlogs } from "../../api/Blogs";
import { ThreeItemsRow } from "@/components/Blog/ThreeItemRow";
export const Blogs = () => {
  // Fetch array with 15 posts  (2 rows * 3 1row*1 2rows *3 2 rows * 1)
  const [blogList, setBlogList] = useState([]);
  const setBlogs = (blogs: any) => {
    setBlogList(blogs);
  };
  // For loop over
  useEffect(() => {
    const blogs = fetchBlogs();
    setBlogs(blogs);
  }, []);
  return (
    <div className="container  mx-auto mt-8 grid min-h-full w-3/5 grid-cols-3 border-2 border-red-700 p-5 ">
      <ThreeItemsRow blogs={blogList} />
      <p className="h-24 w-24 bg-yellow-600"></p>
    </div>
  );
};
