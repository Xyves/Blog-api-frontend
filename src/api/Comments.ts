export const fetchComments = async () => {
  try {
    const response = await fetch(
      "https://blog-api-backend-production-6489.up.railway.app/api/comments",
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
export const fetchComment = async () => {
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
export const createComment = async (data: object) => {
  const url = `https://blog-api-backend-production-6489.up.railway.app/api/posts/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    console.log("Post created successfully:", result);
  } catch (error) {
    console.error("Failed to create post:", error);
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
