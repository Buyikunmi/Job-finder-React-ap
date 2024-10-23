import React from "react";

const HomeCards = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="container-xl m-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-extrabold">For developers</h2>
              <p className="mt-2 mb-4">
                Browse our jobs and start your career today
              </p>
              <a className="bg-black inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                Browse jobs
              </a>
            </div>
            <div className="bg-purple-200 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-extrabold">For Employers</h2>
              <p className="mt-2 mb-4">
                List your job to find the perfect developer role
              </p>
              <a className="bg-purple-700 inline-block text-white rounded-lg px-4 py-2 hover:bg-purple-900">
                Add job
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCards;
