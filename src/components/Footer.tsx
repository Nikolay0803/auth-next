import Link from "next/link";
import Logo from "@/assets/logo.svg?react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-8 md:px-[128px] py-8 bg-[#3A5068] text-white dark:bg-[#1c2938] dark:text-gray-300">
      <div className="flex flex-col gap-3 items-center">
        <Link className="flex items-center" href="/">
          <Logo />
          <p className="text-[20px] font-medium ml-2">LearnLingo</p>
        </Link>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>

      <address className="flex flex-col gap-1 text-center md:text-left">
        <span>66 Hrushevskoho Street, Khmelnytskyi</span>
        <a
          className="text-blue-400 hover:underline dark:text-blue-300"
          href="tel:+380737777777"
        >
          +380737777777
        </a>
        <span>пн-пт: 9:00 - 19:00</span>
      </address>

      <ul className="flex gap-3 mt-3 md:mt-0">
        <li>
          <a
            href="https://github.com/Nikolay0803"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 dark:hover:text-gray-500"
          >
            <AiFillGithub size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mykola-maslakai-28318027a/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 dark:hover:text-gray-500"
          >
            <FaLinkedinIn size={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
