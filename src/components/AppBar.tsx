import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import Image from "next/image";
import logo from "@/assets/ukraine.png"


const AppBar = () => {
  return (
    <header className="flex items-center mb-5 px-[128px] py-5">
      {/* Логотип і назва */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-6 h-6">
          <Image src={logo} alt="logo" />
        </div>
        <p className="text-[20px] font-medium ml-2">LearnLingo</p>
      </div>

      {/* Навігаційні посилання */}
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

      {/* Кнопка входу/реєстрації */}
      <div className="flex-1 flex items-center justify-center">
        <SignInButton />
      </div>
    </header>
  );
};

export default AppBar;
