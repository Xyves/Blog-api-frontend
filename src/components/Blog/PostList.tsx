import React from "react";
import Post from "./Post";
const MemoizedPost = React.memo(Post);

export const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <div className="container  mx-auto mt-8  grid min-h-full w-3/5 grid-cols-12   gap-4  border-2 border-red-700 p-5 child:col-span-4 child:row-span-2 child:h-96">
      {posts.map((post, index) => {
        // Determine variant: first 6 are variant1, then variant2, repeat
        const variant = index % 7 === 6 ? "variant2" : "variant1";
        console.log(variant + post.title);

        return <MemoizedPost key={post.id} post={post} variant={variant} />;
      })}
    </div>
  );
};
