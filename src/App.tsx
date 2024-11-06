import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Blogs } from "./pages/Blogs/Articles";
import { Blog } from "./pages/Blogs/Article/SingleArticle";
import { Layout } from "./Layout/Layout";
import { Error } from "./pages/Error";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import PostsAdmin from "./pages/Admin/pages/Posts";
import PostComments from "./pages/Admin/pages/CommentsList";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<PostsAdmin />} />
        <Route path="/admin/:postId/comments" element={<PostComments />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
