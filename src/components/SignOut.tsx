"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import close from "@/assets/x.png";

interface SignOutModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const SignOut: React.FC<SignOutModalProps> = ({ isVisible, onClose }) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
    router.push("/");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 backdrop-blur-sm">
      <div className="relative bg-white text-[#121417] dark:bg-[#1F1F1F] dark:text-white rounded-[30px] p-[64px]">
        <button className="absolute top-4 right-4 w-8 h-8" onClick={onClose}>
          <Image src={close} alt="close" className="dark:invert" />
        </button>
        <h2 className="text-[40px] font-medium mt-3 mb-5">Sign Out</h2>
        <p className="mb-6">Are you sure you want to sign out?</p>
        <button
          onClick={handleSignOut}
          className="py-4 px-[88px] text-lg font-bold bg-[#9FB7CE] text-[#121417] dark:bg-[#3B82F6] dark:text-white rounded-xl"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default SignOut;
