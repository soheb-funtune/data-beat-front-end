import React, { useCallback, useState } from "react";
import "./first-task.css";
import { Link } from "react-router-dom";
import { MuiModal } from "../../components/MuiModal/MuiModal";

const FirstTask = () => {
  const [showModal, setShowModal] = useState(false);
  const [itemsList, setItemsList] = useState([]);

  const handleDragStart = (e) => {
    e.target.classList.add("dragging");
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove("dragging");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleInputElements = (text) => {
    switch (text) {
      case "file":
        return (
          <div className={`draggable `}>
            <label>Select File</label>
            <input type="file" id={Date.now()} placeholder="Select File" />
          </div>
        );
      case "text":
        return (
          <div className="draggable">
            <label htmlFor="textInput">Enter Text</label>
            <input type="text" id={Date.now()} placeholder="Enter Your Text" />
          </div>
        );
      case "email":
        return (
          <div className="draggable">
            <label htmlFor="textInput">Enter Email</label>
            <input
              type="email"
              id={Date.now()}
              placeholder="Enter Your Email"
            />
          </div>
        );
      case "password":
        return (
          <div className="draggable">
            <label htmlFor="textInput">Enter Password</label>
            <input
              type="password"
              id={Date.now()}
              placeholder="Enter Password"
            />
          </div>
        );
      case "color":
        return (
          <div className="draggable">
            <label htmlFor="textInput">Select Color</label>
            <input
              className="w-full h-11"
              type="color"
              id={Date.now()}
              placeholder="Select Color"
            />
          </div>
        );
      default:
        return null;
    }
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    console.log({ e });
    let draggedItem = document.querySelector(".dragging");
    console.log(draggedItem.innerText);
    setItemsList((pre) => [...pre, draggedItem.innerText]);
    const elementToAppend = handleInputElements(text);
    if (draggedItem) {
      // let clone = draggedItem.cloneNode(true);
      clone.setAttribute("id", Date.now()); // Set a unique identifier for the clone
      e.target.appendChild(elementToAppend);
      draggedItem.classList.remove("dragging");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = {};
    formData.forEach((value, key) => {
      formObj[key] = value;
    });
    console.log(formObj);
  };

  const inputLists = ["email", "text", "password", "file", "color"];

  return (
    <div>
      <div className="flex justify-between px-5 shadow-sm items-center py-4 sticky top-0 z-10 bg-white">
        <h3 className="text-green-500 font-semibold text-xl ">
          First Task Drag and Drop
        </h3>
        <Link
          className="underline text-blue-700 text-center px-2 rounded-lg "
          to={"/"}
        >
          Go-To Second Task
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <form onSubmit={handleSubmit} className="container-css  col-span-[1.5]">
          {" "}
          <div className="flex justify-end">
            <button
              onClick={() =>
                setItemsList((pre) => {
                  let arr = [...pre];
                  console.log(arr?.pop());
                  return arr;
                })
              }
              className="bg-green-800 p-2 rounded-lg text-white float-end mb-3 mr-1 "
            >
              Undo
            </button>
            <button
              onClick={() => setShowModal(true)}
              type="submit"
              className="bg-green-800 p-2 rounded-lg text-white float-end mb-3 "
            >
              Submit
            </button>
          </div>
          <div
            className=" pb-8 min-h-[50vh]"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <b className="text-white">Dropzone </b>
            {itemsList?.map((item, i) => handleInputElements(item))}
          </div>
        </form>
        <div
          className="container-css bg-white border-black border-solid col-span-1"
          // onDragOver={handleDragOver}
          // onDrop={handleDrop}
        >
          {inputLists?.map((item, i) => (
            <div
              key={i}
              className="draggable border  mt-2"
              draggable="true"
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              <label>{item}</label>
            </div>
          ))}
        </div>
      </div>
      {itemsList?.length > 0 && showModal && (
        <MuiModal
          open={showModal}
          setOpen={setShowModal}
          itemsList={itemsList}
          handleInputElements={handleInputElements}
        />
      )}
    </div>
  );
};

export default FirstTask;
