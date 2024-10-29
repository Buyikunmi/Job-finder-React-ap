import React from "react";
import JobListing from "../components/JobListing";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

const JobListings = ({ isHome = false }) => {
  // const recentJobs = isHome ? jobs.slice(0, 3) : jobs;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const apiLink = isHome ? "api/jobs?_limit=3" : "api/jobs";
      const res = await fetch(apiLink);
      const data = await res.json();
      setJobs(data);
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div>
      <section className="bg-purple-200 px-4  py-10">
        <div className="container-xl m-auto lg:container">
          <h2 className="text-purple-600 text-3xl font-bold text-center mb-6">
            {isHome ? "Recent Jobs" : "All Job"}
          </h2>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default JobListings;
