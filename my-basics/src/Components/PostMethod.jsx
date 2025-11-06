import React, { useEffect, useState } from "react";

const PostMethod = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //   const [fPosts, setFposts] = useState(false);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

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

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const postData = {
      userId: 1,
      title,
      body,
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(postData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status : ${response.status} `);
      }
      const finalData = await response.json();
      console.log(finalData);
      setPosts([finalData, ...posts]);
      setLoading(false);
      setTitle("");
      setBody("");
    } catch (error) {
      console.log("Somethings wrong", error);
      setLoading(false);
      setError("Falied to create post. Try again later!");
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
        Create and Display Posts
      </h1>

      {/* Form for creating a new post */}
      <form
        onSubmit={handleSubmit}
        className="mb-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 max-w-md mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 transition duration-300 ease-in-out shadow-sm"
            placeholder="Enter the title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="body"
            className="block text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2"
          >
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 transition duration-300 ease-in-out shadow-sm resize-none"
            placeholder="Enter the body content"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="block w-1/2 mx-auto py-3 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 transition duration-300 ease-in-out shadow-md font-semibold"
        >
          Create Post
        </button>
      </form>

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
            <p className="text-sm dark:text-gray-300 text-gray-700">
              {post.email}
            </p>
            <p className="text-sm dark:text-gray-400 text-gray-500">
              Body :{post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostMethod;
