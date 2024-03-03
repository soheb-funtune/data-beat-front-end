import React, { useState, useEffect } from "react";
import PostsList from "./PostsList";
import NewPostForm from "./NewPostForm";
import { Link } from "react-router-dom";

const BackendOperation = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      setPosts(response?.data?.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await fetch(`http://localhost:4000/api/posts/${postId}`, {
        method: "DELETE",
      });
      // Optionally, you can fetch the updated list of posts after successful deletion
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleCreatePost = async (postData) => {
    try {
      await fetch(`http://localhost:4000/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="  ">
      <div className="flex justify-between px-5 shadow-sm items-center py-4 sticky top-0 z-10 bg-white">
        <h3 className="text-green-500 font-semibold text-xl ">
          Third Task API Operation
        </h3>
        <Link
          className="underline text-blue-700 text-center px-2 rounded-lg "
          to={"/"}
        >
          Go-To Second Task
        </Link>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 lg:overflow-hidden mx-auto mt-2">
        <NewPostForm onSubmit={handleCreatePost} />
        <PostsList posts={posts} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default BackendOperation;
