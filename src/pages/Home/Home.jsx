import React from "react";
import PostsList from "../../components/posts-list/PostsList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="flex justify-between px-5 shadow-sm items-center py-4 sticky top-0 bg-white">
        <h3 className="text-green-500 font-semibold text-xl ">
          Infinite Scroll With API Data
        </h3>
        <Link
          className="underline text-blue-700 text-center px-2 rounded-lg "
          to={"/back-end-operation"}
        >
          GO-TO Third Task
        </Link>
      </div>
      <PostsList />
    </div>
  );
};

export default Home;
