import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="bg-purple-700 border-b border-purple-700">
      <div className="mx-auto max-w-7xl  px-2 sm:px-6">
        <div className="flex h-28 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center flex-1 justify-between md:flex-row">
            <div className="flex flex-shrink-0 items-center mr-4">
              <span className="md:block text-white text-3xl font-bold ml-2">
                JobFinder
              </span>
            </div>

            <div className="md:ml-auto">
              <div className=" mt-2 mb-2 flex space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-black hover:bg-gray-800 rounded-md px-3 py-2"
                      : "text-white hover:bg-gray-800 rounded-md px-3 py-2"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-black hover:bg-gray-800 rounded-md px-3 py-2"
                      : "text-white hover:bg-gray-800 rounded-md px-3 py-2"
                  }
                >
                  Jobs
                </NavLink>
                <NavLink
                  to="/add-jobs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-black hover:bg-gray-800 rounded-md px-3 py-2"
                      : "text-white hover:bg-gray-800 rounded-md px-3 py-2"
                  }
                >
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
