import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../assets/components/Spinner";

const AddJobPage = ({ submitJob }) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  //get data from form when submitted
  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    submitJob(newJob);
    toast.success("Job added sucessfully");
    return navigate("/jobs");
  };
  return loading ? (
    <Spinner />
  ) : (
    <>
      <section className="bg-purple-100">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-center font-bold mb-6">Add Job</h2>
              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Job Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="border rounded-lg w-full py-2 px-3"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Intern">Intern</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Job Listing Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded-lg w-full py-2 px-3"
                  placeholder="eg. Senior developer"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Job description
                </label>
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  className="border rounded-lg w-full h-28 py-2 px-3"
                  placeholder="eg. Add any job duties, expectations and requirement"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Salary
                </label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  className="border rounded-lg w-full py-2 px-3"
                  placeholder="$100K"
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                ></input>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="company_location"
                  name="company_location"
                  className="border rounded-lg w-full py-2 px-3"
                  placeholder="Company Location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                ></input>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-2xl mb-5">Company Info</h3>
                <label
                  htmlFor="company_name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  className="border rounded-lg w-full py-2 px-3"
                  placeholder="Company Name"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                ></input>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="company_description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company description
                </label>
                <textarea
                  type="text"
                  id="company_description"
                  name="company_description"
                  className="border rounded-lg w-full h-28 py-2 px-3"
                  placeholder="eg. Add any job duties, expectations and requirement"
                  required
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="border rounded-lg w-full py-2 px-3"
                  placeholder="Contact Email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                ></input>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="border rounded-lg w-full py-2 px-3"
                  placeholder="optional phone number"
                  required
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                ></input>
              </div>

              <button
                className="bg-purple-600 w-full border rounded-full py-2 px-3 text-white font-bold hover:bg-purple-900"
                type="submit"
              >
                Add Job
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddJobPage;
