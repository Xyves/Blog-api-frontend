import { Link } from "react-router-dom";
import { PostInterface } from "@/interface";
export default function Posts({ post }: { post: PostInterface }) {
  return (
    <li>
      <section className="border:2 mx-auto my-6  flex h-36 w-4/5  items-center justify-between  overflow-hidden border-black child:my-6 child:p-3">
        <textarea
          autoFocus
          className="whitespace-wrap  h-full resize-none break-words p-5"
        >
          {post.title}
        </textarea>

        <textarea
          value={post.content}
          autoFocus
          className="my-5 block h-72 w-3/5 resize-y overflow-auto text-sm"
        />

        <input type="text" value={post.created} autoFocus className=" " />

        <button className="h-72 break-words">
          {post.isPublished ? "✓" : "X"}
        </button>
        <Link to={`${post.id}/comments`}>Comments</Link>
      </section>
    </li>
  );
}
