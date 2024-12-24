export const fetchBlogs = async (url: string) => {
  try {
    const response = await fetch(url, {
      mode: "cors",
    });
    if (response.ok) {
      const json = response.json();
      return json;
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (e) {
    console.error(e);
  }
};

export const fetchBlog = async (url: string) => {
  try {
    const response = await fetch(url, { mode: "cors" });

    if (response.ok) {
      const json = response.json();
      return json;
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (e) {
    console.error(e);
  }
};

export const createPost = async (data: object) => {
  const url = `https://blog-api-backend-production-6489.up.railway.app/api/posts/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
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
    console.error("Failed to create post:", error);
  }
};

export const updatePost = async (postId: string, data: object) => {
  const url = `https://blog-api-backend-production-6489.up.railway.app/api/posts/${postId}`;
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

export const deletePost = async (postId: string) => {
  const url = `https://blog-api-backend-production-6489.up.railway.app/api/posts/${postId}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      mode: "cors",
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

export const fetchUserById = async (postId) => {
  try {
    const url = `https://blog-api-backend-production-6489.up.railway.app/api/user/${postId}`;
    const response = await fetch(url, {
      method: "GET",
    });

    if (response.ok) {
      console.log("Promise resolved and HTTP status is successful"), response;
      return response.json();
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (e) {
    console.error(e);
  }
};
