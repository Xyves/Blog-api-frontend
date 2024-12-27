import "primeicons/primeicons.css";
import { CommentInterface } from "@/interface.ts";

export default function Comment({ comment }: { comment: CommentInterface }) {
  (comment);
  const createdDate = new Date(comment.created);
  const formattedDate = createdDate.toLocaleString("en-GB");
  return (
    <div className="my-4 grid  w-full  grid-rows-6  bg-[#131415] bg-opacity-50 p-2">
      <div className="top row-span-2  text-lg">
        <i className="pi pi-user" style={{ fontSize: "1rem" }}></i>
        <span>&nbsp;{comment.author}</span>
      </div>
      <div className="middle text-md row-span-2">
        <p>{comment.message}</p>
      </div>
      <div className="bottom row-span-1 mt-2 flex items-center text-sm">
        <span> {formattedDate}</span>
      </div>
    </div>
  );
}
