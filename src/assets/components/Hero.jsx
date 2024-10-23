import React from "react";

const Hero = ({
  title = "Looking for a Job?",
  subtitle = "Find the Job that fits your skill set",
}) => {
  return (
    <div>
      <section className="bg-purple-700 border-t-2 border-purple-700">
        <div className="max-w-7xl mx-auto px-4  flex flex-col items-center">
          <div className="text-center">
            <h1 className="mt-12 text-white text-4xl  font-extrabold md:text-5xl sm:text-6xl">
              {title}
            </h1>
            <p className="my-4 text-2xl text-white">{subtitle}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
