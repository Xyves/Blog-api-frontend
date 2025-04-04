export const fetchDbComments = async (url: string) => {
  try {
    const response = await fetch(url, {});
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (e) {
    console.error(e);
  }
};
export const fetchDbComment = async (commentId: string) => {
  try {
    const response = await fetch(
      `https://blog-api-backend-production-6489.up.railway.app/api/comments/${commentId}`,
      {
        method: "GET",
      },
    );

    if (response.ok) {
      return response;
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (e) {
    console.error(e);
  }
};
export const createComment = async (
  postId: string,
  userId: string,
  message: string,
) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `https://blog-api-backend-production-6489.up.railway.app/api/${postId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({ message, userId }),
      },
    );

    if (response.ok) {
      return response.json();
    } else {
      const errorText = await response.text();
      console.error(
        "Promise resolved but HTTP status failed:",
        response.status,
        errorText,
      );
    }
  } catch (e) {
    console.error("Fetch error:", e);
  }
};
export const updateComment = async (commentId: string, data: object) => {
  const url = `https://blog-api-backend-production-6489.up.railway.app/api/posts/${commentId}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Failed to update post:", error);
  }
};
export const deleteComment = async (commentId: string) => {
  const url = `https://blog-api-backend-production-6489.up.railway.app/api/posts/${commentId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Failed to delete post:", error);
  }
};
export const fetchUserByCommentId = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (response.ok) {
      return response.json();
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (e) {
    console.error(e);
  }
};
export const HandleCommitSubmit = async (event: any) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const nickname = formData.get("nickname");
  const message = formData.get("message");
  // const userId =
  const postId = formData.get("postId");
  try {
    const response = await fetch(
      `https://blog-api-backend-production-6489.up.railway.app/api/${postId}comments/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname, message, postId }),
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
