import React from "react";
import Post from "./Post";
import { PostInterface } from "@/interface";
const MemoizedPost = React.memo(Post);

export const PostList = ({ posts }: { posts: PostInterface[] }) => {
  return (
    <div className="  mx-auto mt-8  grid min-h-full w-3/5 grid-cols-12   gap-4   p-6  child:row-span-2 child:h-96">
      {posts.map((post, index) => {
        const variant = index % 7 === 6 ? "variant2" : "variant1";
        return <MemoizedPost key={post.id} post={post} variant={variant} />;
      })}
    </div>
  );
};
