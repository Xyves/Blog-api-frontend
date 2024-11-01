import "primeicons/primeicons.css";

export default function Comment({ comment }) {
  const createdDate = new Date(comment.created);
  const formattedDate = createdDate.toLocaleString("en-GB");
  return (
    <div className="my-4 grid  w-full  grid-rows-7  bg-[#131415] bg-opacity-50 p-2">
      <div className="top row-span-3  text-lg">
        <i className="pi pi-user" style={{ fontSize: "1rem" }}></i>
        <span>&nbsp;{comment.author}</span>
      </div>
      <div className="middle text-md row-span-3">
        <p>{comment.message}</p>
      </div>
      <div className="bottom row-span-1 mt-2 flex items-center text-sm">
        <span> {formattedDate}</span>
      </div>
    </div>
  );
}
