import { Outlet } from "react-router-dom";
import Footer from "./LayoutFooter";
import Header from "./LayoutHeader";
export const Layout = () => {
  return (
    <div className=" flex min-h-screen w-full  flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
