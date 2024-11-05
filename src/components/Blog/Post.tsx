import React from "react";
import { Link } from "react-router-dom";

export default function Post({ post, variant }) {
  const createdDate = new Date(post.created);
  const formattedDate = createdDate.toLocaleString("en-GB");
  return variant === "variant1" ? (
    <article className="col-span-4  my-4 flex  h-full overflow-hidden rounded-lg border-2 bg-[#232428]">
      <section className=" flex  h-full   w-full flex-col">
        <Link to={`${post.id}`} className="flex   w-full">
          <figure className=" h-40 w-full  bg-green-800">
            <img
              src={post.imageUrl[0]}
              alt=""
              className="h-full w-full rounded-t-md"
            />
            <figcaption></figcaption>
          </figure>
        </Link>
        <div className="text my-2 inline-block p-3">
          <Link to={`${post.id}`} className="">
            <h2 className="mb-2  inline-block text-sm text-[#e4e4e4]">
              {post.title}
            </h2>
            <br />

            <h2 className="inline-block text-sm text-xs text-[#d6d0c5]">
              {post.content.split(" ").slice(0, 12).join(" ") + "..."}{" "}
            </h2>
          </Link>
        </div>
        <p className="metadata pointer-events-none mb-5  mt-auto p-2 text-sm text-gray-200">
          <span>{post.author} - &nbsp;</span>
          <span>{formattedDate} </span>
        </p>
      </section>
    </article>
  ) : //     <article className="col-span-12 grid grid-rows-12 border-2 border-blue-300 bg-[#383c3f]">
  //       <figure className="row-span-4 border-2 border-red-600 bg-green-600">
  //         <img alt="" />
  //         <figcaption></figcaption>
  //       </figure>
  //       <Link to={`${post.id}`} className="">
  //         <div className="title text-wrap text-md  row-span-3 border-2 border-blue-600 p-2 text-[#e4e4e4]">
  //           <p className="break-all">{post.title}</p>
  //         </div>
  //         <div className="description row-span-3 border-2 border-red-600 p-2  text-sm text-[#d6d0c5]">
  //           {post.content.split(" ").slice(0, 20).join(" ") + "..."}
  //         </div>
  //       </Link>
  //       <div className="comments row-span-2 flex items-center justify-center border-2 border-gray-800 p-2 text-xs text-white">
  //         <span>{post.author} - &nbsp;</span>
  //         <span>{formattedDate} </span>
  //         <p
  //           className="pi pi-comment mx-1
  // "
  //         ></p>
  //         <p>204</p>
  //       </div>
  //     </article>
  null;
}
