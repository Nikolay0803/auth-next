import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import Image from "next/image";
import logo from "@/assets/ukraine.png"


const AppBar = () => {
  return (
    <header className="flex items-center mb-5 px-[128px] py-5">
      <Link className="flex-1 flex items-center justify-center" href={"/"}>
        <div className="w-6 h-6">
          <Image src={logo} alt="logo" />
        </div>
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
        <SignInButton />
      </div>
    </header>
  );
};

export default AppBar;
