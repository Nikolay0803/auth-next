import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import Image from "next/image";
import logo from "@/assets/ukraine.png"


const AppBar = async () => {
  // const session = await getServerSession(authOptions);
  return (
    <header className="flex items-center gap-10 mb-5 px-[128px] py-5">
      <div className="flex gap-2 mr-[390px]">
        <div className="w-6 h-6">
          <Image src={logo} alt="logo" />
        </div>
        <p className="text-[20px] font-medium">LearnLingo</p>
      </div>
      <div className="flex gap-[28px] font-medium">
        <Link className="ransition-colors hover:text-[#9FB7CE]" href={"/"}>
          Home
        </Link>
        <Link
          className="transition-colors hover:text-[#9FB7CE]"
          href={"/dashboard"}
        >
          Teachers
        </Link>
      </div>
      <SignInButton />

      {/* <Link
        className="text-white transition-colors hover:text-blue-500 mb-[400px]"
        href={`/dashboard/user/${session?.user.id}`}
      >
        User Profile
      </Link> */}
    </header>
  );
};

export default AppBar;
