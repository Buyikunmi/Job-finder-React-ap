import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <>
      <section className="text-center flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className="text-yellow-400 text-6xl  mb-4"></FaExclamationTriangle>
        <h1 className="text-6xl font-bold mb-4">Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <Link
          to="/"
          className="text-white bg-purple-700 hover:bg-purple-900 rounded-lg px-3 py-2 mt-4"
        >
          Go Back
        </Link>
      </section>
    </>
  );
};

export default NotFoundPage;
