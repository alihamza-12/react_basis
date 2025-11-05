import React, { useEffect, useState } from "react";

const SimpleFetch = () => {
  const [loading, setLoading] = useState(true);
  const [fetchUsers, setFetchUsers] = useState([]);

  useEffect(() => {
    let timeInterval;
    const fetchUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const userData = await response.json();
      //   console.log(userData);
      timeInterval = setTimeout(() => {
        setFetchUsers(userData);
        setLoading(false);
      }, 2000);
    };
    fetchUser();

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  if (loading)
    return <p className="text-center text-gray-500 dark:text-white mt-20">Loading...</p>;

  return (
    <div className="pb-20">
      <h1 className="text-xl bg-red-400 p-2 rounded-lg text-white text-center mb-4">
        Here i am using the simple Fetch method for fetch the api data and show
        on the screen
      </h1>

      <ul className="space-y-2">
        {fetchUsers.map((user) => (
          <li
            key={user.id}
            className="border p-2 rounded-lg bg-gray-100 dark:text-white dark:bg-gray-700 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm dark:text-gray-300 text-gray-700">{user.email}</p>
            <p className="text-sm dark:text-gray-400 text-gray-500">{user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleFetch;
