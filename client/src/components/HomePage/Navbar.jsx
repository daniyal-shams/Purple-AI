import { useState } from "react";
import Logo from "../../assets/logo.svg"
import { ShimmerButton } from "../magicui/shimmer-button";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return ( 
         <header className="flex items-center justify-between px-6 py-3 md:py-4 shadow max-w-5xl rounded-full mx-auto w-full bg-white">
      {/* Logo */}
      <a href="#">
        <img
          src= {Logo}
          alt="Purple AI Logo"
        />
      </a>

      {/* Nav Menu */}
      <nav
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full transition-[width] bg-white/50 backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal
        ${menuOpen ? "max-md:w-full" : "max-md:w-0"}`}
      >
        <a className="hover:text-indigo-600" href="#">
          Products
        </a>
        <a className="hover:text-indigo-600" href="#">
          Customer Stories
        </a>
        <a className="hover:text-indigo-600" href="#">
          Pricing
        </a>
        <a className="hover:text-indigo-600" href="#">
          Docs
        </a>

        {/* Close Button (mobile only) */}
        <button
          onClick={() => setMenuOpen(false)}
          className="md:hidden text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        

    <ShimmerButton className="shadow-2xl">
       <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Get Started
      </span>
    </ShimmerButton>

        {/* Open Button (mobile only) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
     );
}

export default Navbar;