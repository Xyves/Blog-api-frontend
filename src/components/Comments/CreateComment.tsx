import { createComment } from "@/api/Comments";
import { UserContext } from "@/main";
import React, { useContext } from "react";
export default function CreateComment({ postId, onCommentCreated }) {
  const { user } = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get("message");
    const userId = user ? user.id : null;

    if (!userId || !message) {
      console.error("User ID or message is invalid");
      return;
    }
    try {
      const commentData = await createComment(postId, userId, message);
      onCommentCreated();
      e.target.reset();
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <textarea
          name="message"
          id=""
          cols="20"
          rows="5"
          className="my-5 w-full resize-none p-3"
        ></textarea>
        <button className="btn-primary w-full bg-orange-500 uppercase">
          post comment
        </button>
      </form>
    </div>
  );
}
