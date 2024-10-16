import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col justify-center">
      <section className="mx-auto    bg-red-100">
        <form
          action="https://blog-api-backend-production-6489.up.railway.app/api/login/"
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
