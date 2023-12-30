import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">{error.status}</h1>
      <h2 className="text-lg text-gray-600 mb-8">
        Oops! An error has occurred
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        {error.statusText || error.message}
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Return to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
