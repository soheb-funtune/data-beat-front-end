// components/Post.js
import React from "react";

const Post = ({ post, onDelete }) => {
  return (
    <div className="max-w-lg mx-auto my-4 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
        <p className="text-gray-600 mt-2">Author: {post.author}</p>
        <p className="text-gray-700 mt-2">{post.content}</p>
      </div>
      <div className="px-4 py-3 bg-gray-100 flex justify-end">
        <button
          onClick={() => onDelete(post._id)}
          className="text-red-500 hover:text-red-600 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
