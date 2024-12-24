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
    <div className="flex flex-col justify-center">
      <section className="mx-auto    bg-red-100">
        <form
          onSubmit={handleSubmit}
          method="post"
          className="w-64 bg-yellow-300"
        >
          <h1>Login</h1>
          <label htmlFor="nickname " className="block">
            nickname:
          </label>
          <input type="text" name="nickname" />
          <label htmlFor="password" className="block">
            password:
          </label>
          <input type="text" name="password" />
          <br />
          <button type="submit" className="block">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
