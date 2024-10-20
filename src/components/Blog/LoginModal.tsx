import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HandleLoginSubmit } from "@/api/Auth";
export default function Login({ onClose }) {
  const ref = useRef();

  useEffect(() => {
    // Function to detect click outside
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    // Attach the click event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay fixed  inset-0 left-1/2 top-1/2 z-[1000] w-1/3 -translate-x-1/2  -translate-y-1/2  bg-[#232428]  backdrop-blur-md"
      ref={ref}
    >
      <div className="top flex w-full items-center bg-[#1c1e1f] p-5 ">
        <p className="">SIGN IN</p>
        <button
          className="close-btn absolute right-[10px] top-[10px] ml-auto
            cursor-pointer border-none text-lg"
        >
          X
        </button>
      </div>
      <div className="middle mt-8 px-5">
        <form
          onSubmit={HandleLoginSubmit}
          method="post"
          className="flex flex-col"
        >
          <label htmlFor="" className=" uppercase text-gray-50">
            Your username
          </label>
          <input type="text" className="mb-5 p-3" name="nickname" />
          <label htmlFor="" className=" uppercase text-gray-50">
            password
          </label>
          <input type="text" className=" p-3" name="password" />
          <p className="text-red  mb-7 flex text-orange-500">
            Forgot your password?
          </p>
          <button type="submit" className="ml-auto">
            LOG IN
          </button>
        </form>

        <p className=" items-end">
          Don't have an account?
          <span className="text-orange-600 underline">
            <Link to={"/register"}>Register now</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
