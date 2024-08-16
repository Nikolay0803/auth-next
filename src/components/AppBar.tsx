import Link from "next/link";
import React from "react";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";


const AppBar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="flex flex-col gap-10 pt-[104px] px-[22px] w-[264px] bg-indigo-950 h-[800px]">
      <Link
        className="text-white ransition-colors hover:text-blue-500"
        href={"/"}
      >
        Home Page
      </Link>
      <Link
        className="text-white transition-colors hover:text-blue-500"
        href={"/dashboard"}
      >
        DashBoard
      </Link>

      <Link
        className="text-white transition-colors hover:text-blue-500 mb-[400px]"
        href={`/dashboard/user/${session?.user.id}`}
      >
        User Profile
      </Link>
      <Link
        href={"/api/auth/signout"}
        className="text-rose-500 hover:text-rose-700"
      >
        Sign Out
      </Link>
    </header>
  );
};

export default AppBar;
