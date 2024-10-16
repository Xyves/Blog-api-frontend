import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Blogs } from "./pages/Blogs/Blogs";
import { Blog } from "./pages/Blogs/Blog";
import { Layout } from "./Layout/Layout";
import { Error } from "./pages/Error";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Science from "./pages/Categories/Science";
import Games from "./pages/Categories/Games";
import Tech from "./pages/Categories/Tech";
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route path="/games" element={<Games />} />
        <Route path="/science" element={<Science />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
