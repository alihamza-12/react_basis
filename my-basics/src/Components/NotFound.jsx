import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black text-center p-6">
      <h1 className="text-8xl font-bold text-gray-800 dark:text-gray-200 mb-6 shadow-2xl">
        404
      </h1>
      <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 dark:hover:from-blue-800 dark:hover:to-blue-1000 transition-all duration-300 hover:scale-105 shadow-2xl"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
