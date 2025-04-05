import { FC, useContext, useEffect } from "react";
import "primeicons/primeicons.css";
import { useState } from "react";
import LoginModal from "@/components/LoginModal";
import { UserContext } from "@/main";
import { Link } from "react-router-dom";
export const LayoutHeader: FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark"; // Fallback to 'dark' if no theme is found
  });

  const [showLogin, setShowLogin] = useState(false);
  const { user, setNewUser } = useContext(UserContext);
  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "emerald" : "dark"));
  };

  const toggleModal = () => {
    setShowLogin(!showLogin);
  };

  const handleLogout = () => {
    fetch("/logout", { method: "GET" })
      .then((response) => {
        if (response.ok) {
          localStorage.removeItem("token");
          setNewUser(null);
        } else {
          throw new Error("Logout failed");
        }
      })
      .catch((err) => {
        console.error("Logout error:", err);
      });
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme") as string;
    document.querySelector("html")?.setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      <header className="mx-auto w-full  bg-[#232428]">
        <nav className=" navbar mx-auto flex  h-14 justify-evenly text-white   sm:w-full   md:w-2/3   lg:w-3/4">
          <Link to={"/"}>
            <span
              className={`
              font-helvetica sm:text-md  ml-5 font-bold  md:text-xl lg:text-3xl
            `}
            >
              Bold Horizons
            </span>
          </Link>
          <section className="navbar-end  flex items-center justify-end   ">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={handleToggle}
                className="hidden"
              />

              <button
                className="btn-ghost btn-circle btn sm:mx-6 lg:ml-0"
                onClick={handleToggle}
                aria-label="theme"
              >
                <div
                  className={theme === "dark" ? "pi pi-moon" : "pi pi-sun"}
                ></div>
              </button>
            </label>

            <button
              className="mx-3 uppercase hover:text-white"
              onClick={user ? handleLogout : toggleModal}
            >
              {user ? "Logout" : "Sign in"}
            </button>
          </section>
        </nav>
        {showLogin && <LoginModal onClose={toggleModal} />}
      </header>
    </>
  );
};

export default LayoutHeader;
