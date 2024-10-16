import React, { useEffect, useRef } from "react";

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
    <>
      <div
        ref={ref}
        className="modal-overlay  fixed  inset-0 left-1/2 top-1/2  z-10 -translate-x-1/2 -translate-y-1/2 bg-red-600 backdrop-filter "
      >
        <form
          action="https://blog-api-backend-production-6489.up.railway.app/api/login/"
          method="post"
          className="flex flex-col"
        >
          <h1>Sign in</h1>
          <button
            className="close-btn absolute right-[10px] top-[10px]
            cursor-pointer border-none text-lg"
          >
            X
          </button>
          <input type="text" name="nickname" placeholder="nickname" />
          <label htmlFor="">password:</label>
          <input type="text" name="password" placeholder="password" />
          <a href="#">Forgot your password?</a>
          <a href="/register">
            Don't have an account?
            <span className="text-orange-600 underline">Register now</span>
          </a>
        </form>
      </div>
    </>
  );
}
