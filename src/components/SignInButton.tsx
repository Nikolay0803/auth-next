"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import log from "@/assets/log-in-01.png";

const SignInButton = () => {
  const { data: session } = useSession();
  console.log({ session });

  if (session && session.user)
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-[#9FB7CE]">{session.user.name}</p>
        <Link
          href={"/api/auth/signout"}
          className="flex gap-4 ml-auto text-[#F0AA8D]"
        >
          Sign Out
        </Link>
      </div>
    );

  return (
    <div className="flex gap-4 ml-auto items-center">
      <div className="flex gap-2">
        <div className="w-5 h-5">
          <Image src={log} alt="login" />
        </div>
        <Link href={"/api/auth/signin"} className="flex gap-4 font-bold">
          Log in
        </Link>
      </div>
      <Link
        href={"/signup"}
        className="flex gap-4 text-white bg-[#121417] py-[14px] px-[39px] p-2 rounded-xl font-bold"
      >
        Registration
      </Link>
    </div>
  );
};

export default SignInButton;
