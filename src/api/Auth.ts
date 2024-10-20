export const HandleLoginSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const nickname = formData.get("nickname");
  const password = formData.get("password");
  try {
    const response = await fetch(
      "https://blog-api-backend-production-6489.up.railway.app/api/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname, password }),
      },
    );
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
    } else {
      console.error(data.message || "Login failed");
    }
  } catch (error) {
    console.error("An error occurred:", error);
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
