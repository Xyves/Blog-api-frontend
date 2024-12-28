import { HandleRegisterSubmit } from "@/api/Auth";
export default function Register() {
  return (
    <section className="my-auto mt-24 flex h-80 flex-col items-center rounded-sm">
      <form
        onSubmit={HandleRegisterSubmit}
        method="post"
        className="flex  flex-col items-center justify-center bg-[#232428] p-16"
      >
        <div className="labelWrap my-2">
          <label
            htmlFor="nickname"
            className="mr-5 inline-block  w-24 p-3 text-end "
          >
            Username:
          </label>
          <input
            type="text"
            name="nickname"
            id="nickname"
            required
            className="bg-[#121212] py-2 pl-2 leading-6"
            pattern="^[a-z\d]{3,20}$"
            title="Nickname must only contain lowercase letters (a-z) and numbers (0-9), be 3-20 characters long, and have no spaces or special characters."
          />
        </div>
        <div className="labelWrap my-2">
          <label
            htmlFor="password"
            className="mr-5 inline-block w-24 p-3 text-end "
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="py-2 pl-2 leading-6  caret-[#121212]"
            pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
          />
        </div>
        <div className="labelWrap my-2">
          <label
            htmlFor="email"
            className="mr-5 inline-block w-24 p-3 text-end"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="py-2 pl-2 leading-6 caret-[#121212]"
          />
        </div>
        <button
          type="submit"
          className="my-3 rounded-lg bg-orange-500 px-4 text-white"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
