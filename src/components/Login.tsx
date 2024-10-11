import React from "react";

export default function Login() {
  return (
    <>
      <form action="/api/login" method="post">
        <label htmlFor="">username</label>
        <input type="text" name="username" />
        <label htmlFor="">password</label>
        <input type="text" name="password" />
      </form>
    </>
  );
}
