import React from "react";
import jobs from "../components/jobs.json";
import JobListing from "../components/JobListing";

const JobListings = () => {
  return (
    <div>
      <section className="bg-purple-200 px-4  py-10">
        <div className="container-xl m-auto lg:container">
          <h2 className="text-purple-600 text-3xl font-bold text-center mb-6">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobListings;
