import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchUserProfile, HandleLoginSubmit } from "@/api/Auth";
import { UserContext } from "@/main";
export default function Login({ onClose }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { setNewUser } = useContext(UserContext);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const tokenData = await HandleLoginSubmit(e);
    if (tokenData) {
      const userData = await fetchUserProfile();
      setNewUser(userData);
      onClose();
    } else {
      alert("Failed to login.");
    }
  };
  return (
    <div
      className="modal-overlay fixed  inset-0 left-1/2 top-1/2 z-[1000]  w-1/3  -translate-x-1/2  -translate-y-1/2  bg-[#232428] backdrop-blur-md"
      ref={ref}
    >
      <div className="top flex w-full items-center bg-[#1c1e1f] p-5 ">
        <p className="text-gray-200">SIGN IN</p>
        <button
          className="close-btn absolute right-[10px] top-[10px] ml-auto
            cursor-pointer border-none text-lg"
          onClick={() => {
            onClose();
          }}
        >
          X
        </button>
      </div>
      <div className="middle mt-8  px-5">
        <form onSubmit={handleSubmit} method="post" className="flex flex-col">
          <label htmlFor="" className="uppercase text-gray-50">
            Your username
          </label>
          <input type="text" className="mb-5 p-3" name="nickname" />
          <label htmlFor="" className="uppercase text-gray-50 ">
            password
          </label>
          <input type="password" className="p-3" name="password" />
          <p className="text-red  mb-7 flex text-orange-500">
            Forgot your password?
          </p>
          <button
            type="submit"
            className="ml-auto bg-orange-500 px-4 py-2 text-gray-100 active:bg-orange-600"
          >
            LOG IN
          </button>
        </form>

        <p className=" items-end text-gray-50">
          Don't have an account? &nbsp;
          <span className="text-orange-600 underline">
            <Link to={"/register"} onClick={onClose}>
              Register now
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
