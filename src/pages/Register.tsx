import { HandleRegisterSubmit } from "@/api/Auth";
export default function Register() {
  return (
    <form onSubmit={HandleRegisterSubmit} method="post">
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
