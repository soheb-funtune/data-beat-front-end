// components/NewPostForm.js
import React, { useState } from "react";

const NewPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, author });
    // setTitle("");
    // setContent("");
    // setAuthor("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-max relative  my-auto lg:sticky lg:top-0 mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Create New Post</h2>
        <div className="mt-4">
          <label htmlFor="title" className="block text-gray-700 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input mt-1 block border w-full"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="content" className="block text-gray-700 font-medium">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-textarea mt-1 block border w-full"
            rows="5"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="author" className="block text-gray-700 font-medium">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-input mt-1 block border w-full"
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          >
            Create Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewPostForm;
