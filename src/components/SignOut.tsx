"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Close from "@/assets/close.svg?react";
import Loader from "@/components/Loader";

interface SignOutModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const SignOut: React.FC<SignOutModalProps> = ({ isVisible, onClose }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut({ callbackUrl: "/" });
      router.push("/");
    } catch (error) {
      console.error("Sign out error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {loading && <Loader />}
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 backdrop-blur-sm z-50"
        role="dialog"
        aria-labelledby="sign-out-dialog"
        aria-hidden={!isVisible}
      >
        <div
          className="relative bg-white text-[#121417] dark:bg-[#1F1F1F] dark:text-white rounded-[30px] p-[64px] transition-transform transform scale-100"
          role="document"
          aria-labelledby="sign-out-dialog-title"
        >
          <button
            className="absolute top-4 right-4 w-8 h-8"
            onClick={onClose}
            aria-label="Close"
          >
            <Close />
          </button>
          <h2
            id="sign-out-dialog-title"
            className="text-[40px] font-medium mt-3 mb-5"
          >
            Sign Out
          </h2>
          <p className="mb-6">Are you sure you want to sign out?</p>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="py-2 px-4 text-lg font-bold bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-white rounded-xl"
            >
              Cancel
            </button>
            <button
              onClick={handleSignOut}
              className="py-2 px-4 text-lg font-bold bg-[#9FB7CE] text-[#121417] dark:bg-[#3B82F6] dark:text-white rounded-xl"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignOut;
