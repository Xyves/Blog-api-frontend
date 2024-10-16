import React from "react";
import { Link } from "react-router-dom";

export default function Post({ post, variant }) {
  const createdDate = new Date(post.created);
  const formattedDate = createdDate.toLocaleString("en-GB");
  return variant === "variant2" ? (
    <article className="grid grid-rows-12 border-2 border-blue-300 bg-[#383c3f] ">
      <figure className="row-span-4 border-2 border-red-600 bg-green-600">
        <img alt="" />
        <figcaption></figcaption>
      </figure>
      <Link to={`blogs/${post.id}`} className="">
        <div className="title text-wrap text-md  row-span-3 border-2 border-blue-600 p-2 text-[#e4e4e4]">
          <p className="break-all">{post.title}</p>
        </div>
        <div className="description row-span-3 border-2 border-red-600 p-2  text-sm text-[#d6d0c5]">
          {post.content.split(" ").slice(0, 20).join(" ") + "..."}
        </div>
      </Link>
      <div className="comments border-gray-800-800 row-span-2 flex items-center justify-center border-2 p-2 text-xs text-white">
        <span>{post.author} - &nbsp;</span>
        <span>{formattedDate} </span>
        <p
          className="pi pi-comment mx-1
"
        ></p>
        <p>204</p>
      </div>
    </article>
  ) : (
    <article className="postRow col-span-3 my-4 flex  h-64 border-2 border-yellow-800 bg-[#232428] text-sm ">
      <section className="  border-6  flex w-full   flex-col   border-4  ">
        <Link to="/blogs/dummydata" className="flex  w-full ">
          <figure className=" h-36 w-full bg-green-800">
            <img src="" alt="" />
            <figcaption></figcaption>
          </figure>
        </Link>
        <div className="text my-2 inline-block p-3">
          <Link to={`blogs/${post.id}`} className="">
            <h2 className="mb-2  inline-block text-lg">{post.title}</h2>
            <br />

            <h2 className=" inline-block   text-sm">
              {post.content.split(" ").slice(0, 12).join(" ") + "..."}{" "}
            </h2>
          </Link>
        </div>
        <p className="metadata pointer-events-none inline-block text-gray-200 no-underline">
          <span>{post.author} - &nbsp;</span>
          <span>{formattedDate} </span>
        </p>
      </section>
    </article>
  );
}
