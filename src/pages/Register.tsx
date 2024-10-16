import React from "react";

export default function Register() {
  return (
    <form
      action="https://blog-api-backend-production-6489.up.railway.app/api/signup/"
      method="post"
    >
      <label htmlFor="nickname">Username</label>
      <input type="text" name="nickname" id="nickname" required />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" required />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required />

      <button type="submit">Submit</button>
    </form>
  );
}
