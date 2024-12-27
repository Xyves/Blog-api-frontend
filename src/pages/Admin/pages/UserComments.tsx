// import { fetchBlogs } from "@/api/Blogs";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { CommentInterface } from "@/interface";
// export default function PostComments() {
//   const [commentsList, setCommentsList] = useState<CommentInterface[]>([]);
//   const setComments = (comments: CommentInterface[]) => {
//     setCommentsList(comments);
//   };
//   const { userId } = useParams();

//   // 14 comments fetch
//   useEffect(() => {
//     const fetchPosts = async () => {
//       const url = `https://blog-api-backend-production-6489.up.railway.app/api/users/${userId}/comments`;
//       const comments = await fetchBlogs(url);
//       if (comments) {
//         setComments(comments);
//       }
//     };
//     fetchPosts();
//   });
//   return (
//     <main>
//       {/* {commentsList.map((comment: CommentInterface) => { */}
//       {/* // return <Posts comment={comment} x="" />; */}
//       {/* // })} */}
//     </main>
//   );
// }
