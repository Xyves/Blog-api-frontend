import { FC, useEffect } from "react";
import "primeicons/primeicons.css";
import { useState } from "react";
export const LayoutHeader: FC = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "night",
  );
  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "night" ? "emerald" : "night"));
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme);
    console.log(`Theme updated to: ${theme}`);
  }, [theme]);
  return (
    <>
      <header>
        <nav className="navbar mx-auto h-14  w-3/4 border-2 border-yellow-700 ">
          <a href="/">
            <span
              className={`
              ml-5 font-helvetica text-3xl font-bold 
            `}
            >
              Bold Horizons
            </span>
          </a>

          <div className="navbar-end ml-auto mr-5 flex border-2 border-red-500">
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
                  className={theme === "night" ? "pi pi-moon" : "pi pi-sun"}
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
            <button className="mx-3 uppercase">
              <a href="/login">sign in</a>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default LayoutHeader;
