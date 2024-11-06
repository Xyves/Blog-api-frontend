import CommentList from "./CommentList";
import { fetchBlog, fetchUserById } from "../../../api/Blogs";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "primeicons/primeicons.css";
import CreateComment from "@/pages/Blogs/Article/CreateComment";
import { fetchUserProfile } from "@/api/Auth";
import { UserContext } from "@/main";

export const Blog = () => {
  const { user, setNewUser } = useContext(UserContext);
  const { blogId } = useParams();
  const [post, setPost] = useState([]);
  const createdDate = new Date(post.created);
  const [isLoading, setIsLoading] = useState(true);
  const formattedDate = createdDate.toLocaleString("en-GB");
  const [refreshComments, setRefreshComments] = useState(false);
  const triggerCommentRefresh = () => setRefreshComments((prev) => !prev);

  const handlePost = (newPost) => {
    setPost(newPost);
  };

  useEffect(() => {
    const fetchBlogPost = async () => {
      setIsLoading(true);
      try {
        const url = `https://blog-api-backend-production-6489.up.railway.app/api/posts/${blogId}`;
        const newPost = await fetchBlog(url);
        if (newPost) {
          const userResponse = await fetchUserById(newPost.userId);
          if (userResponse) {
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
        setIsLoading(false);
      }
    };

    const fetchUserIfLoggedIn = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const userProfile = await fetchUserProfile();
          if (userProfile) {
            setNewUser(userProfile);
          } else {
            setNewUser(null);
          }
        }
      } catch (error) {
        console.error("Error fetching user profile:", error.message);
      }
    };
    fetchBlogPost();
    fetchUserIfLoggedIn();
  }, []);

  return (
    <main className="mx-auto min-h-full flex-1">
      <title>{post.title}</title>
      {isLoading ? (
        <div className="flex min-h-screen  items-center justify-center">
          <p className="loading w-10">Loading...</p>
        </div>
      ) : (
        <div className="flex h-full flex-col  justify-center">
          <header
            id="top "
            className="my-5 grid   grid-cols-2 bg-gray-700 p-10 lg:h-80 "
          >
            <div className="text   mx-auto flex w-1/2 flex-col  justify-between p-5">
              <h1 className=" text-3xl text-gray-100">{post.title}</h1>
              <div className="metadata my-3">
                <h2 className="text-orange-500">{post.author} </h2>
                <span className="text-gray-300"> - {formattedDate}</span>
              </div>
            </div>
            <div className="image    w-96 bg-red-700">
              <img src={post.imageUrl[0]} alt="" className="h-full w-full" />
            </div>
          </header>
          <article
            id="main-content"
            className=" mx-auto flex w-3/5 items-center justify-center"
          >
            <p className="text- text-center text-2xl leading-relaxed">
              {post.content}
            </p>
            <div className="author"></div>
          </article>
          <section
            id="comments "
            className="flex  w-full flex-col items-center "
          >
            <div id="comments-wrapper   " className=" ">
              <div
                className=" m-0 my-6 mt-16 flex min-w-full items-center"
                id="comments-title"
              >
                <div className="flex flex-col ">
                  <div className="flex items-center justify-center border-b-2">
                    <i
                      className="pi pi-comment"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                    <p className="text ml-2  block  font-mono uppercase text-green-500 lg:text-4xl ">
                      Comments
                    </p>
                  </div>
                  {user ? (
                    <CreateComment
                      postId={post.id}
                      onCommentCreated={triggerCommentRefresh}
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="comments-thread  my-6 w-3/6  p-5">
              <CommentList postId={post.id} refreshTrigger={refreshComments} />
            </div>
          </section>
        </div>
      )}
    </main>
  );
};
