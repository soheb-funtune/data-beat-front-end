import React, { useCallback, useState } from "react";
import "./first-task.css";

const FirstTask = () => {
  const [previewItem, setPreviewItem] = useState();

  const handleDragStart = (e) => {
    e.target.classList.add("dragging");
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove("dragging");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    console.log({ e });
    let draggedItem = document.querySelector(".dragging");
    if (draggedItem) {
      console.log({ draggedItem });
      let clone = draggedItem.cloneNode(true);
      clone.setAttribute("id", Date.now()); // Set a unique identifier for the clone
      e.target.appendChild(draggedItem);
      draggedItem.classList.remove("dragging");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = {};
    formData.forEach((value, key) => {
      formObj[key] = value;
    });
    console.log(formObj);
  };

  return (
    <div>
      FirstTask
      <div className="grid grid-cols-2 gap-5">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-800 p-2 rounded-lg text-white float-end mb-3 "
            >
              Submit
            </button>
          </div>
          <div
            className="container-css pb-8 min-h-[50vh]"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          ></div>
        </form>
        <div
          className="container-css "
          // onDragOver={handleDragOver}
          // onDrop={handleDrop}
        >
          <div
            className="draggable"
            draggable="true"
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <label htmlFor="file">Select File</label>
            <input
              type="file"
              // id="file"
              placeholder="Select Your File"
            />
          </div>
          <div
            className="draggable"
            draggable="true"
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              //  id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div
            className="draggable"
            draggable="true"
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              // id="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div
            className="draggable"
            draggable="true"
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              // id="name"
              placeholder="Enter Your Name"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTask;
