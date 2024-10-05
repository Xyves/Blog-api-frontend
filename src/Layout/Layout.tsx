import { Outlet } from "react-router-dom";
import Footer from "./LayoutFooter";
import Header from "./LayoutHeader";
export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
