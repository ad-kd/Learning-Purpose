import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="ezy__nav2 dark py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative">
      <nav>
        <div className="container px-4">
          <div className="flex justify-between items-center">

            <a className="font-black text-3xl" href="#">The Company</a>

            {/* Hamburger Button */}
            <button
              className="block lg:hidden cursor-pointer h-10 z-20"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <div className="h-0.5 w-7 bg-black dark:bg-white -translate-y-2"></div>
              <div className="h-0.5 w-7 bg-black dark:bg-white"></div>
              <div className="h-0.5 w-7 bg-black dark:bg-white translate-y-2"></div>
            </button>

            {/* Navbar Menu */}
            <ul
              className={`flex flex-col lg:flex-row justify-center items-center text-3xl lg:text-base gap-6 lg:gap-2 absolute h-screen w-screen top-0 
                transition-all duration-300
                ${open ? "" : "left-full"}
                lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent`}
            >
              <li><a className="px-4 opacity-100" href="#">Home</a></li>
              <li><a className="px-4 opacity-50 hover:opacity-100" href="#">Services</a></li>
              <li><a className="px-4 opacity-50 hover:opacity-100" href="#">Why us?</a></li>
              <li><a className="px-4 opacity-50 hover:opacity-100" href="#">How We Works</a></li>
              <li><a className="px-4 opacity-50 hover:opacity-100" href="#">Achivements</a></li>
              <li><a className="px-4 opacity-50 hover:opacity-100" href="#">Contact Us</a></li>
              <li>
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-1.5 px-4 rounded">
                  Sign Up
                </button>
              </li>
              <li>
<button
  className="cursor-pointer `bg-gradient-to-b` from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-slate-500 text-white font-medium group"
>
  <div className="relative overflow-hidden">
    <p
      className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
    >
      login
    </p>
    <p
      className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
    >
      login
    </p>
  </div>
</button>

              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
