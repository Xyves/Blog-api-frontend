import { FC, useContext, useEffect } from "react";
import "primeicons/primeicons.css";
import { useState } from "react";
import LoginModal from "@/components/Blog/LoginModal";
import { UserContext } from "@/main";
export const LayoutHeader: FC = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark",
  );
  const [showLogin, setShowLogin] = useState(false);
  const { user, setNewUser } = useContext(UserContext);
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
  return (
    <>
      <header className="mx-auto w-full bg-[#232428]">
        <nav className=" navbar mx-auto  flex h-14 w-3/4  justify-evenly   text-white">
          <a href="/">
            <span
              className={`
              font-helvetica ml-5 text-3xl font-bold 
            `}
            >
              Bold Horizons
            </span>
          </a>
          <section className="navbar-end mr-5 flex w-1/3 items-center   justify-end  ">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={handleToggle}
                className="hidden"
              />

              <button
                className="btn-ghost btn-circle btn"
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
              onClick={toggleModal}
            >
              {user ? <p>sign in</p> : <a href="/logout">logout</a>}
            </button>
          </section>
        </nav>
        {showLogin && <LoginModal onClose={toggleModal} />}
      </header>
    </>
  );
};

export default LayoutHeader;
