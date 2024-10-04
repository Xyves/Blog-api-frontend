import { FC } from "react";
import "primeicons/primeicons.css";

export const LayoutHeader: FC = () => {
  return (
    <>
      <header>
        <nav className="navbar bg-base-100">
          <div className="navbar-end ml-auto">
            <button className="btn-ghost btn-circle btn">
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
            <button className="btn-ghost btn-circle btn">
              <div className="pi-moon pi"></div>
            </button>
          </div>
          <button className="uppercase">sign in</button>
        </nav>
      </header>
    </>
  );
};

export default LayoutHeader;
