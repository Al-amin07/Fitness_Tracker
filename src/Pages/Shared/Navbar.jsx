import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Button from "./Button";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const handleLogOut = () => {
    
    logOut().then(() => {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Logged Out!!!",
        showConfirmButton: false,
        timer: 1000,
      });
    });
  };
  return (
    <>
      <header className=" mb-12 border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative  mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            // aria-label="main navigation"
            className="flex h-[4.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <Link
              to="/"
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center  whitespace-nowrap py-3 text-2xl font-bold focus:outline-none lg:flex-1"
            >
              Fitness<sup className="text-cyan-700">Synced</sup>
            </Link>
            {/* For Small Device */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                    ${
                      isToggleOpen
                        ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                        : ""
                    }
                  `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>

            {/*      <!-- Navigation links --> */}
            <ul
              className={`absolute  left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex  lg:px-4 py-4 items-stretch">
                <NavLink
                  to="/"
                  className="flex items-center gap-2 rounded-lg  transition-colors duration-300 focus:outline-none focus-visible:outline-none px-3"
                >
                  <span>Home</span>
                </NavLink>
              </li>

              <li role="none" className="flex lg:px-4 py-4 items-stretch">
                <NavLink
                  to="/all-trainer"
                  className="flex items-center gap-2  transition-colors duration-300 rounded-lg  focus:outline-none focus-visible:outline-none px-3"
                >
                  <span>All Trainer</span>
                </NavLink>
              </li>

              <li role="none" className="flex lg:px-4 py-4 items-stretch">
                <NavLink
                  to="/all-class"
                  className="flex items-center gap-2  transition-colors duration-300 rounded-lg  focus:outline-none focus-visible:outline-none px-3"
                >
                  <span>All Class</span>
                </NavLink>
              </li>

              <li role="none" className="flex lg:px-4 py-4 items-stretch">
                <NavLink
                  to="/community"
                  className="flex items-center gap-2  transition-colors duration-300 rounded-lg  focus:outline-none focus-visible:outline-none px-3"
                >
                  <span>Community</span>
                </NavLink>
              </li>
              {user && (
                <li role="none" className="flex lg:px-4 py-4 items-stretch">
                  <NavLink
                    to="/dashboard"
                    className="flex items-center gap-2  transition-colors duration-300 rounded-lg  focus:outline-none focus-visible:outline-none px-3"
                  >
                    <span>DashBoard</span>
                  </NavLink>
                </li>
              )}
            </ul>

            {/*      <!-- Actions --> */}
            <div className="ml-auto flex items-center gap-4 justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
              {user ? (
                <>
                  <div className="flex  flex-col items-center justify-center">
                    <div className="flex space-x-5">
                      <img
                        alt="Photo"
                        className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-gray-300 dark:ring-offset-gray-100"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleLogOut}
                    className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide  transition duration-300 rounded focus-visible:outline-none whitespace-nowrap  disabled:shadow-none bg-cyan-600 text-white"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button text="Login" />
                  </Link>
                  <Link to="/register">
                    <Button text="Register" />
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
