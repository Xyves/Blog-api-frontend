import { input } from "@testing-library/user-event/dist/cjs/event/input.js";
import React, { useState } from "react";

export default function Posts({ post }) {
  const [isEditing, setIsEditing] = useState({
    title: false,
    content: false,
    created: false,
    isPublished: false,
  });
  const [updatedPost, setUpdatedPost] = useState({
    title: post.title,
    content: post.content,
    created: post.created,
    published: post.isPublished,
  });
  const handleDoubleClick = (elem) => {
    setIsEditing((prevState) => ({
      ...prevState,
      [elem]: true,
    }));
  };
  // Losing focus event
  const handleBlur = (elem) => {
    setIsEditing((prevState) => ({
      ...prevState,
      [elem]: false,
    }));
    fetch();
  };
  return (
    <li>
      <section className="border:2 mx-auto my-8 flex h-16 w-4/5 items-center justify-between border-black">
        {isEditing.title ? (
          <input
            type="text"
            value={post.title}
            onChange={(e) => handleChange(e, "title")}
            onBlur={() => handleBlur("title")}
            autoFocus
          />
        ) : (
          <p onDoubleClick={() => handleDoubleClick("title")}>{post.title}</p>
        )}
        <p>{post.content}</p>
        <p>{post.created}</p>
        <p>
          <button>{post.isPublished ? "✓" : "X"}</button>
        </p>
      </section>
    </li>
  );
}
