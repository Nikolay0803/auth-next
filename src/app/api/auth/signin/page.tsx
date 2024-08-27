"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import InputBox from "@/components/InputBox";
import Link from "next/link";
import Close from "@/assets/close.svg?react";
import { toast } from "react-toastify";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setEmailError(null);

    if (!validateEmail(username)) {
      setEmailError("Invalid email format");
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
      callbackUrl: "/dashboard",
    });

    if (result?.error) {
      switch (result.error) {
        case "CredentialsSignin":
          setError("Wrong username or password");
          toast.error("Wrong username or password");
          break;
        default:
          setError("Error occurred during sign-in");
          toast.error("Error occurred during sign-in");
          break;
      }
    } else if (result?.ok && result.url) {
      toast.success("Successfully signed in!");
      window.location.href = result.url;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 backdrop-blur-sm">
      <div className="relative max-w-[566px] bg-white text-[#121417] dark:bg-[#1F1F1F] dark:text-white rounded-[30px] p-[64px]">
        <Link className="absolute top-4 right-4 w-8 h-8" href={"/"}>
          <Close />
        </Link>
        <h1 className="text-[40px] font-medium mt-3 mb-5">Log In</h1>
        <p className="text-[#8b8b8b] dark:text-[#9e9e9e] mb-6">
          Welcome back! Please enter your credentials to access your account and
          continue your search for a teacher.
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {emailError && <p className="text-red-500 mb-4">{emailError}</p>}
        <form
          className="p-2 flex flex-col gap-[18px] mb-4"
          onSubmit={handleSubmit}
        >
          <InputBox
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="py-4 px-[88px] text-lg font-bold bg-[#9FB7CE] text-[#121417] dark:bg-[#3B82F6] dark:text-white rounded-xl"
          >
            Sign In
          </button>
        </form>
        <Link
          className="text-[#8b8b8b] dark:text-[#9e9e9e] mb-6"
          href={"/signup"}
        >
          Don&apos;t have an account{" "}
          <span className="text-[#9FB7CE] dark:text-[#3A5068] underline">
            Register
          </span>
        </Link>
      </div>
    </div>
  );
}
