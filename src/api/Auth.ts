export const HandleLoginSubmit = async (e: any) => {
  e.preventDefault();

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
      return data;
    } else {
      console.error(data.message || "Login failed");
      return null;
    }
  } catch (err) {
    console.error("An error occurred:", err);
    return null;
  }
};
export const HandleRegisterSubmit = async (e: any) => {
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
      window.location.href = "/login";
    } else {
      console.error(data.message || "Login failed");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
export const getUserIdByNickname = async (nickname: string) => {
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
  if (!token) {
    console.error("No token found");
    return null;
  }

  try {
    const response = await fetch(
      "https://blog-api-backend-production-6489.up.railway.app/api/user/me",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      // Handle HTTP errors
      const errorText = await response.text();
      console.error("Failed to fetch profile:", errorText);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};
