import { useState } from "react";
import useRole from "../../Hooks/useRole";
import { Link, NavLink } from "react-router-dom";
import Admin from "../../DashBoard/Admin/Admin";
import Member from "../../DashBoard/Member/Member";
import Trainer from "../../DashBoard/Trainer/Trainer";
import './Sidebar.css'
import { IoIosLogOut } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";

const Sidebar = () => {
  const { logOut } = useAuth();

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const [role] = useRole();
    const handleLogout = () => {
      logOut()
      .then(() => {
        console.log('hello');
      })
    }
    return (
        <div className="">
     
        <button
          title="Side navigation"
          type="button"
          className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
            isSideNavOpen
              ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
              : ""
          }`}
          aria-haspopup="menu"
          aria-label="Side navigation"
          aria-expanded={isSideNavOpen ? " true" : "false"}
          aria-controls="nav-menu-2"
          onClick={() => setIsSideNavOpen(!isSideNavOpen)}
        >
          <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-cyan-500 transition-all duration-300"
            ></span>
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-6 transform rounded-full bg-cyan-500 transition duration-300"
            ></span>
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-cyan-500 transition-all duration-300"
            ></span>
          </div>
        </button>
  
        
        <aside
          id="nav-menu-2"
          aria-label="Side navigation"
          className={`fixed  bg-slate-50 lg:bg-white top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r shadow-2xl transition-transform lg:translate-x-0 ${
            isSideNavOpen ? "translate-x-0" : " -translate-x-full"
          }`}
        >
          <NavLink to="/" className="text-2xl font-bold mx-auto mt-5">
            Fitness<sup className="text-cyan-700">Synced</sup>
          </NavLink>
          <nav
            aria-label="side navigation"
            className="flex-1  divide-y px-3 divide-slate-100 overflow-auto"
          >
            <div className="">
              <ul className="flex flex-1 flex-col gap-1 py-3 ">
                <li  className="px-3">
                  
                  <NavLink to='/dashboard' end  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-cyan-200 hover:text-cyan-700 focus:bg-cyan-50 aria-[current=page]:bg-cyan-50 aria-[current=page]:text-cyan-700 ">
                    <div className="flex items-center self-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        aria-label="Dashboard icon"
                        role="graphics-symbol"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </div>
                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                      Dashboard
                    </div>
                  </NavLink>
                </li>
             
                {role === 'member' && <Member/>}
                {role === 'trainer' && <Trainer/>}
                {role === "admin" && <Admin />}
              </ul>
            </div>
            <div className="">
              <ul className="flex flex-1 flex-col gap-1 py-3">
                
               {
                (role === 'admin' || role === 'trainer') &&  <li  className="px-3">
                  
                <NavLink to='profile' end  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-cyan-200 hover:text-cyan-700 focus:bg-cyan-50 aria-[current=page]:bg-cyan-50 aria-[current=page]:text-cyan-700 ">
                  <div className="flex items-center self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-label="Dashboard icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Profile
                  </div>
                </NavLink>
              </li>
               }
               <li  className="px-3">
                  
                  <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-cyan-200 hover:text-cyan-700 focus:bg-cyan-50 aria-[current=page]:bg-cyan-50 aria-[current=page]:text-cyan-700 ">
                    <div className="flex items-center self-center">
                     <IoIosLogOut className="text-2xl"/>
                    </div>
                    <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                      Log Out
                    </div>
                  </button>
                </li>
               
              </ul>
            </div>
          </nav>
          <footer className="border-t border-slate-200 p-3">
            <a
              href="#"
              className="flex items-center gap-3 rounded p-3 text-slate-900 transition-colors hover:text-cyan-500 "
            >
              <div className="flex items-center self-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                  aria-label="Dashboard icon"
                  role="graphics-symbol"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium">
                Settings
              </div>
            </a>
          </footer>
        </aside>
  
        <div
          className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
            isSideNavOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsSideNavOpen(false)}
        ></div>
      </div>
    );
};

export default Sidebar;