import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Blogs } from "./pages/Blogs/Blogs";
import { Layout } from "./Layout/Layout";
import { Error } from "./pages/Error";
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/error" element={<Error />} />
      </Route>
    </Routes>
  );
};
