import React, { useEffect, useState } from "react";

const DeleteMethod = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [posts, setPosts] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    let timeInterval;
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status : ${response.status} `);
        }
        const postData = await response.json();
        //   console.log(postData);
        timeInterval = setTimeout(() => {
          setPosts(postData);
          setLoading(false);
          //   setFposts(true);
        }, 2000);
      } catch (error) {
        console.log("Somethings wrong", error);
        setLoading(false);
        setError("Falied to fetch post. Try again later!");
      }
    };
    fetchPosts();

    return () => {
      clearTimeout(timeInterval);
    };
  }, []);

  const handleId = (id) => {
    console.log(id);
    setId(id);
    handleSubmit(id);
  };

  const handleSubmit = async (dltId) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${dltId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status : ${response.status} `);
      }
      const finalData = await response.json();
      //   console.log(finalData);
      //   console.log(dltId);

    //   for deleting the post
      setPosts((prePost) =>
        // prePost.filter((post) => (post.id === dltId ? null : post))
        prePost.filter((post) => (post.id !== dltId))
      );

      setLoading(false);
      setId("");
    } catch (error) {
      console.log("Somethings wrong", error);
      setLoading(false);
      setError("Falied to Put post. Try again later!");
    }
  };

  if (loading)
    return (
      <p className="text-center text-gray-500 dark:text-white mt-20 shadow-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-4 rounded-lg">
        Loading...
      </p>
    );

  if (error)
    return (
      <p className="text-center text-gray-500 dark:text-white mt-20 shadow-lg bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900 dark:to-pink-900 p-4 rounded-lg">
        {error}
      </p>
    );

  //   if (fPosts)
  return (
    <div className="pb-20">
      <h1 className="text-xl bg-gradient-to-r from-red-400 to-pink-500 p-2 rounded-lg text-white text-center mb-4 shadow-lg">
        Delete Posts and Display
      </h1>

      {/* Displaying post */}
      <ul className="space-y-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border p-4 rounded-lg bg-gradient-to-r from-gray-100 to-blue-50 dark:text-white dark:from-gray-700 dark:to-blue-900 shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-gray-200 hover:to-blue-100 dark:hover:from-gray-800 dark:hover:to-blue-950 transition-all duration-300"
          >
            <p className="font-semibold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ID : {post.id}
            </p>
            <p className="font-semibold">User ID : {post.userId}</p>
            <p className="font-semibold">Title : {post.title}</p>
            <p className="text-sm dark:text-gray-400 text-gray-500">
              Body :{post.body}
            </p>
            <button
              onClick={() => handleId(post.id)}
              className="block w-1/2 mx-auto py-3 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-blue-300 transition duration-300 ease-in-out shadow-md font-semibold"
            >
              Delete Post
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteMethod;
