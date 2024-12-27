import { HandleLoginSubmit } from "@/api/Auth";
import { UserContext } from "@/main";
import { useContext } from "react";
export default function Login() {
  const { setNewUser } = useContext(UserContext);

  const handleSubmit = async (e: MouseEvent) => {
    const userData = await HandleLoginSubmit(e);
    if (userData) {
      setNewUser(userData.nickname);
      window.location.href = "/";
    } else {
      console.error("Failed to login.");
    }
  };
  return (
    <div className="mt-20 flex flex-col justify-center rounded-lg">
      <section className="mx-auto  rounded-lg  bg-red-100 ">
        <form
          onSubmit={(e: any) => handleSubmit(e)}
          method="post"
          className="line flex w-64 flex-col justify-center rounded-lg bg-yellow-300 px-12 py-10 leading-7 [&>*]:text-black "
        >
          <h1 className="mb-10 w-full  text-2xl font-bold">Login</h1>
          <label htmlFor="nickname " className="mb-2 block font-semibold">
            nickname:
          </label>
          <input
            type="text"
            name="nickname"
            className="line mb-10 bg-blue-200 leading-7 text-white placeholder:text-white"
          />
          <label htmlFor="password" className="mb-2 block font-semibold">
            password:
          </label>
          <input type="password" name="password" className="bg-blue-200" />
          <br />
          <button
            type="submit"
            className=" btn-primary block bg-[#003366] !text-white "
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
