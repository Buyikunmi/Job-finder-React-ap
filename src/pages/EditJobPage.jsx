import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Spinner from "../assets/components/Spinner";

const defaultData = {
  title: "",
  type: "",
  location: "",
  description: "",
  salary: 0,
  company: {
    name: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
  },
};

const EditJobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(defaultData);
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);
  const navigate = useNavigate();

  const updateInput = (e) =>
    setJob((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submitForm = (e) => {
    e.preventDefault();

    const updatedJob = {
      ...job,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    submitJob(updatedJob);
    toast.success("Job Edited sucessfully");
    return navigate("/jobs");
  };

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/jobs/${id}`);
      const data = await res.json();
      // console.log(data, data.company.contactEmail);
      setJob(data);
      setCompanyName(data.company.name);
      setContactEmail(data.company.contactEmail);
      setCompanyDescription(data.company.description);
      setContactPhone(data.company.contactPhone);
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      {job && (
        <>
          <section className="bg-purple-100">
            <div className="container m-auto max-w-2xl py-24">
              <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <form onSubmit={submitForm}>
                  <h2 className="text-3xl text-center font-bold mb-6">
                    Add Job
                  </h2>
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
                      value={job.type}
                      onChange={(e) => updateInput(e)}
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
                      value={job.title}
                      onChange={(e) => updateInput(e)}
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
                      value={job.description}
                      onChange={(e) => updateInput(e)}
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
                      value={job.salary}
                      onChange={(e) => updateInput(e)}
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
                      value={job.location}
                      onChange={(e) => updateInput(e)}
                    ></input>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold text-2xl mb-5">
                      Company Info
                    </h3>
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
                    Edit Job
                  </button>
                </form>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default EditJobPage;
