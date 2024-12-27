import { Link } from "react-router-dom";
import { PostInterface } from "@/interface.ts";

export default function Post({
  post,
  variant,
}: {
  post: PostInterface;
  variant: string;
}) {
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
  ) : null;
}
