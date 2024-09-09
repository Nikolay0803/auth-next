"use client";
import Link from "next/link";
import React, { useState } from "react";
import SignInButton from "./SignInButton";
import Logo from "@/assets/logo.svg?react";
import ThemeToggle from "./ThemeToggle";

const AppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="flex flex-col sm:flex-row mb-5 px-4 sm:px-[128px] py-5 relative">
      <Link
        className="flex-1 flex items-center justify-between sm:justify-center mb-4 sm:mb-0"
        href={"/"}
      >
        <Logo className="w-8 h-8" />
        <p className="text-[20px] font-medium ml-2">LearnLingo</p>
        <button
          className="sm:hidden p-2 rounded-md focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </Link>

      {menuOpen && (
        <nav className="sm:hidden absolute top-full left-0 w-full max-h-[calc(100vh-60px)] overflow-y-auto bg-gray-800 dark:bg-gray-900 shadow-md z-10">
          <ul className="flex flex-col items-center py-4 space-y-2">
            <li>
              <Link
                className="block px-4 py-2 text-center text-lg font-medium text-white hover:text-[#9FB7CE]"
                href={"/"}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 text-center text-lg font-medium text-white hover:text-[#9FB7CE]"
                href={"/dashboard"}
                onClick={() => setMenuOpen(false)}
              >
                Teachers
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <nav className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center gap-[28px] font-medium">
        <Link className="transition-colors hover:text-[#9FB7CE]" href={"/"}>
          Home
        </Link>
        <Link
          className="transition-colors hover:text-[#9FB7CE]"
          href={"/dashboard"}
        >
          Teachers
        </Link>
      </nav>
      <div className="flex-1 flex items-center justify-center gap-4">
        <ThemeToggle />
        <SignInButton />
      </div>
    </header>
  );
};

export default AppBar;
