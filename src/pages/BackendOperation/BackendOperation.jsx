// components/Blog.js
import React, { useState, useEffect } from "react";
// import axios from "axios";
import PostsList from "./PostsList";
import NewPostForm from "./NewPostForm";

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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold  text-gray-800 mb-4">My Blog</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:overflow-hidden">
        <NewPostForm onSubmit={handleCreatePost} />
        <PostsList posts={posts} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default BackendOperation;
