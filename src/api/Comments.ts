export const fetchDbComments = async (url) => {
  try {
    const response = await fetch(url, {});
    if (response.ok) {
      const json = response.json();
      console.log("Promise resolved and HTTP status is successful");
      return json;
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (e) {
    console.error(e);
  }
};
export const fetchDbComment = async () => {
  try {
    const response = await fetch(
      `https://blog-api-backend-production-6489.up.railway.app/api/comments/${commentId}`,
      {
        method: "GET",
      },
    );

    if (response.ok) {
      console.log("Promise resolved and HTTP status is successful" + response);
      return response;
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (e) {
    console.error(e);
  }
};
export const createComment = async (postId, userId, message) => {
  console.log(postId, userId, message);
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
        body: JSON.stringify({ message, userId }),
      },
    );

    if (response.ok) {
      console.log("Promise resolved and HTTP status is successful:", response);
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

    const result = await response.json();
    console.log("Comment updated successfully:", result);
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

    const result = await response.json();
    console.log("Comment deleted successfully:", result);
  } catch (error) {
    console.error("Failed to delete post:", error);
  }
};
export const fetchUserByCommentId = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (response.ok) {
      console.log("Promise resolved and HTTP status is successful" + response);
      return response.json();
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (e) {
    console.error(e);
  }
};
export const HandleCommitSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
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
