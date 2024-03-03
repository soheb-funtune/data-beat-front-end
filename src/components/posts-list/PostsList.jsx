import React, { useState, useEffect } from "react";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://dummyjson.com/products?limit=${
          10 * page
        }&select=title,thumbnail,description`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log({ res });
          setPosts(res?.products);
        });
    };
    fetchData();
  }, [page]);
  // infinite Scoll Logic
  const handleInfiniteScroll = async () => {
    console.log(
      "scroll",
      window.innerHeight,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight
    );
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.documentElement.scrollHeight
    ) {
      setPage((pre) => pre + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-3 ">
      {posts?.map(({ title, thumbnail, description }, index) => (
        <div key={index} className=" rounded overflow-hidden shadow-lg">
          <img
            className="w-full max-h-[200px] object-contain"
            src={thumbnail}
            alt="Card"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
