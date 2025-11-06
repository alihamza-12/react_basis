import React, { useEffect, useState } from "react";

const SimpleFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchUsers, setFetchUsers] = useState([]);

  useEffect(() => {
    let timeInterval;
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status : ${response.status} `);
        }
        const userData = await response.json();
        //   console.log(userData);
        timeInterval = setTimeout(() => {
          setFetchUsers(userData);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log("Somethings wrong", error);
        setLoading(false);
        setError("Falied to fetch user. Try again later!");
      }
    };
    fetchUser();

    return () => {
      clearTimeout(timeInterval);
    };
  }, []);

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

  return (
    <div className="pb-20">
      <h1 className="text-xl bg-gradient-to-r from-red-400 to-pink-500 p-2 rounded-lg text-white text-center mb-4 shadow-lg">
        Here i am using the simple Fetch method for fetch the api data and show
        on the screen
      </h1>

      <ul className="space-y-2">
        {fetchUsers.map((user) => (
          <li
            key={user.id}
            className="border p-4 rounded-lg bg-gradient-to-r from-gray-100 to-blue-50 dark:text-white dark:from-gray-700 dark:to-blue-900 shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-gray-200 hover:to-blue-100 dark:hover:from-gray-800 dark:hover:to-blue-950 transition-all duration-300"
          >
            <p className="font-semibold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {user.name}
            </p>
            <p className="text-sm dark:text-gray-300 text-gray-700">
              {user.email}
            </p>
            <p className="text-sm dark:text-gray-400 text-gray-500">
              {user.address.city}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleFetch;
