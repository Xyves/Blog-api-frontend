import { FC, useEffect } from "react";
import "primeicons/primeicons.css";
import { useState } from "react";
import LoginModal from "@/components/LoginModal";
export const LayoutHeader: FC = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark",
  );
  const [showLogin, setShowLogin] = useState(false);
  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "emerald" : "dark"));
  };
  const toggleModal = () => {
    setShowLogin(!showLogin);
    console.log(showLogin);
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme);
    console.log(`Theme updated to: ${theme}`);
  }, [theme]);
  useEffect(() => {
    const root = document.querySelector("section");
    if (showLogin) {
      root.classList.add("blur-md");
    } else {
      root.classList.remove("blur-md");
    }
    return () => {
      root.classList.remove("blur-md");
    };
  }, [showLogin]);
  return (
    <>
      <header>
        <nav className=" navbar mx-auto  flex h-14 w-3/4  justify-evenly border-2 border-yellow-700 bg-[#232428] text-white">
          <a href="/">
            <span
              className={`
              font-helvetica ml-5 text-3xl font-bold 
            `}
            >
              Bold Horizons
            </span>
          </a>
          <section className="navbar-middle ml-auto">
            <a href="/gaming">
              <span className="mx-5 uppercase hover:text-green-600">
                gaming
              </span>
            </a>
            <a href="/science">
              <span className="mx-5 uppercase hover:text-green-600">
                science
              </span>
            </a>
            <a href="/tech">
              <span className="mx-5 uppercase hover:text-green-600">tech</span>
            </a>
          </section>
          <section className="navbar-end mr-5 flex w-1/3 items-center   justify-end border-2 border-red-500">
            <label className="swap swap-rotate">
              {/* Hidden checkbox for accessibility (optional) */}
              <input
                type="checkbox"
                onChange={handleToggle}
                className="hidden"
              />

              {/* Button with icon reflecting the current theme */}
              <button
                className="btn-ghost btn-circle btn"
                onClick={handleToggle}
              >
                <div
                  className={theme === "dark" ? "pi pi-moon" : "pi pi-sun"}
                ></div>
              </button>
            </label>
            <button className="btn-ghost btn-circle btn  mr-10  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              className="mx-3 uppercase hover:text-white"
              onClick={toggleModal}
            >
              Login
              {/* TODO find a way to check if the user is logged in  */}
              {/* {!user ? (
                <a href="/login">sign in</a>
              ) : (
                <a href="/logout">logout</a>
              )} */}
            </button>
          </section>
        </nav>
        {showLogin && <LoginModal onClose={toggleModal} />}
      </header>
    </>
  );
};

export default LayoutHeader;
