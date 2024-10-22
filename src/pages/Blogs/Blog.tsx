import { fetchBlog, fetchUserById } from "../../api/Blogs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { blogId } = useParams();
  const token = localStorage.getItem("token");
  const [post, setPost] = useState([]);
  const createdDate = new Date(post.created);
  const [isLoading, setIsloading] = useState(true);
  const formattedDate = createdDate.toLocaleString("en-GB");
  const handlePost = (newPost) => {
    setPost(newPost);
    console.log("user");
    console.log(post);
  };
  if (token) {
    // Show form with creating new comment
  }
  useEffect(() => {
    const fetchPost = async () => {
      setIsloading(true);
      const url = `https://blog-api-backend-production-6489.up.railway.app/api/posts/${blogId}`;

      try {
        const newPost = await fetchBlog(url);
        if (newPost) {
          console.log(newPost);
          const userResponse = await fetchUserById(newPost.userId);
          if (userResponse) {
            console.log("Went through");

            const fullPost = {
              ...newPost,
              author: userResponse.nickname, // Add userName to the post
            };
            handlePost(fullPost);
          }
        }
      } catch (error) {
        console.error("An error occurred:", error.message);
      } finally {
        setIsloading(false);
      }
    };

    fetchPost();
  }, []);
  return (
    <main className="mx-auto min-h-full w-3/4 flex-1">
      {isLoading ? (
        <div className="flex min-h-screen  items-center justify-center">
          <p className="loading w-10">Loading...</p>
        </div>
      ) : (
        <div className="container ">
          <header id="top">
            <h2>Title</h2>
            <div className="metadata">
              <span>{post.author} - &nbsp;</span>
              <span>{formattedDate}</span>
            </div>
          </header>
          <article id="main-content">
            <p></p>
            <div className="author"></div>
          </article>
          <section id="comments">
            <div id="comments-wrapper">
              <div className="comments-title"></div>
            </div>
            <div className="comments-thread"></div>
          </section>
        </div>
      )}
    </main>
  );
};
