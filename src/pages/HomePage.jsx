import React from "react";
import Hero from "../assets/components/Hero";
import HomeCards from "../assets/components/HomeCards";
import JobListings from "../assets/components/JobListings";
import ViewAllJobs from "../assets/components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
