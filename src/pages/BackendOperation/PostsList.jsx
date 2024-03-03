// components/PostsList.js
import React from "react";
import Post from "./Post";

const PostsList = ({ posts, onDelete }) => {
  console.log({ posts });
  return (
    <div className="mt-4 px-4 overflow-y-scroll h-[80vh]">
      {posts?.map((post) => (
        <Post key={post._id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostsList;
