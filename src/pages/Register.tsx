import { HandleRegisterSubmit } from "@/api/Auth";
export default function Register() {
  return (
    <section className="flex h-80 flex-col items-center justify-center">
      <form
        onSubmit={HandleRegisterSubmit}
        method="post"
        className="bg-gray-600 p-16"
      >
        <div className="labelWrap">
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
            className="bg-slate-800"
          />
        </div>
        <div className="labelWrap">
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
            className="bg-slate-800"
          />
        </div>
        <div className="labelWrap">
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
            className="bg-slate-800"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-orange-500 px-4 py-1 text-white"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
