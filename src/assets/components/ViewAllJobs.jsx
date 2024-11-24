import React from "react";
import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <div>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/jobs"
          className="block text-white font-bold text-center bg-black rounded-xl py-4 px-4 hover:bg-purple-950"
        >
          View All Jobs
        </Link>
      </section>
    </div>
  );
};

export default ViewAllJobs;
