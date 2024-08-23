import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import Logo from "@/assets/logo.svg?react";
import ThemeToggle from "./ThemeToggle";

const AppBar = () => {
  return (
    <header className="flex items-center mb-5 px-[128px] py-5">
      <Link className="flex-1 flex items-center justify-center" href={"/"}>
        <Logo />
        <p className="text-[20px] font-medium ml-2">LearnLingo</p>
      </Link>
      <nav className="flex-1 flex items-center justify-center gap-[28px] font-medium">
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

      <div className="flex-1 flex items-center justify-center">
        <ThemeToggle />
        <SignInButton />
      </div>
    </header>
  );
};

export default AppBar;
