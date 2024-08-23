"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import log from "@/assets/log-in-01.png";
import Login from "@/assets/login.svg?react";
import person from "@/assets/person.png";
import Person from "@/assets/person.svg?react";
import SignOut from "./SignOut";

const SignInButton = () => {
  const { data: session } = useSession();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSignOutClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  if (session && session.user)
    return (
      <div className="flex gap-4 ml-auto items-center">
        <Person />
        <p className="text-[#9FB7CE]">{session.user.name}</p>
        <button
          onClick={handleSignOutClick}
          className="flex gap-4 ml-auto text-[#F0AA8D]"
        >
          Sign Out
        </button>
        <SignOut isVisible={isModalVisible} onClose={handleCloseModal} />
      </div>
    );

  return (
    <div className="flex gap-4 ml-auto items-center">
      <div className="flex gap-2">
        <Login />
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
