import CommentList from "./CommentList";
import { fetchBlog, fetchUserById } from "../../../api/Blogs";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "primeicons/primeicons.css";
import CreateComment from "@/pages/Blogs/Article/CreateComment";
import { fetchUserProfile } from "@/api/Auth";
import { PostInterface } from "@/interface.ts";
import { UserContext } from "@/main";
export const Blog = () => {
  const { user, setNewUser } = useContext(UserContext);
  const { blogId } = useParams();
  const [post, setPost] = useState<PostInterface>({
    id: "",
    title: "",
    content: "",
    created: "",
    isPublished: false,
    userId: "",
    imageUrl: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const [refreshComments, setRefreshComments] = useState(false);
  const triggerCommentRefresh = () => setRefreshComments((prev) => !prev);
  const handlePost = (newPost: PostInterface) => {
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
            const createdDate = new Date(newPost.created);
            const formattedDate = createdDate.toLocaleString("en-GB");
            const fullPost = {
              formattedDate: formattedDate,
              ...newPost,
              author: userResponse.nickname,
            };
            handlePost(fullPost);
          }
        }
      } catch (error: any) {
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
            // setNewUser(null);
            return null;
          }
        }
      } catch (error: any) {
        console.error("Error fetching user profile:", error.message);
      }
    };
    fetchBlogPost();
    fetchUserIfLoggedIn();
  }, []);

  return (
    <main className=" flex min-h-full flex-1 justify-center">
      <title>{post.title}</title>
      {isLoading ? (
        <div className="flex min-h-screen  items-center justify-center">
          <p className="loading w-10">Loading...</p>
        </div>
      ) : (
        <div className="flex h-full flex-col  justify-center">
          <header
            id="top "
            className="mb-5 mt-1 bg-gray-700 p-10 sm:flex  sm:flex-col lg:grid lg:h-80 lg:grid-cols-2 "
          >
            <div className="text   mx-auto flex flex-col justify-between p-5 sm:w-full  md:w-full lg:w-1/2">
              <h1 className=" text-3xl text-gray-100">{post.title}</h1>
              <div className="metadata my-3">
                <h2 className="text-orange-500">{post.author} </h2>
                <span className="text-gray-300"> {post.formattedDate}</span>
              </div>
            </div>
            <div className="image h-60 bg-red-700 sm:w-full md:w-96">
              <img
                src={post.imageUrl[0]}
                alt="article image"
                className="h-full w-full"
              />
            </div>
          </header>
          <article
            id="main-content"
            className=" mx-auto flex items-center justify-center sm:mx-12 sm:w-full lg:w-3/5"
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
