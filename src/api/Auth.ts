import { UserContext } from "@/main";
import { useContext } from "react";

export const HandleLoginSubmit = async (e) => {
  e.preventDefault();
  const { user, setNewUser } = useContext(UserContext);

  const formData = new FormData(e.target);
  const nickname = formData.get("nickname");
  const password = formData.get("password");
  try {
    const response = await fetch(
      "https://blog-api-backend-production-6489.up.railway.app/api/login/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname, password }),
      },
    );
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      setNewUser(data);
      console.log(user);
      window.location.href = "/";
    } else {
      console.error(data.message || "Login failed");
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
};
export const HandleRegisterSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const nickname = formData.get("nickname");
  const password = formData.get("password");
  const email = formData.get("email");
  const role = formData.get("role") || "USER";
  try {
    const response = await fetch(
      "https://blog-api-backend-production-6489.up.railway.app/api/signup/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname, password, email, role }),
      },
    );
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "/";
    } else {
      console.error(data.message || "Login failed");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
export const getUserIdByNickname = async (nickname) => {
  try {
    const response = await fetch(
      "https://blog-api-backend-production-6489.up.railway.app/api/signup/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname }),
      },
    );
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "/";
    } else {
      console.error(data.message || "Login failed");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
export const fetchUserProfile = async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const response = await fetch(
    "https://blog-api-backend-production-6489.up.railway.app/api/user/me",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response;
};
