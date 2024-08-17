"use client";

import React, { useRef } from "react";
import InputBox from "@/components/InputBox";
import { Backend_URL } from "@/lib/Constants";
import Image from "next/image";
import Link from "next/link";
import close from "@/assets/x.png";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const data = useRef<FormInputs>({
    name: "",
    email: "",
    password: "",
  });

  const register = async () => {
    try {
      const res = await fetch(Backend_URL + "/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: data.current.name,
          email: data.current.email,
          password: data.current.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        alert(res.statusText);
        return;
      }

      const response = await res.json();
      alert("User Registered!");
      console.log({ response });
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-[566px] bg-white rounded-[30px] p-[64px]">
        <Link className="absolute top-4 right-4 w-8 h-8" href={"/"}>
          <Image src={close} alt="close" />
        </Link>
        <h1 className="text-[40px] font-medium mt-3 mb-5">Registration</h1>
        <p className="text-[#8b8b8b] mb-10">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <div className="p-2 flex flex-col gap-[18px] mb-10">
          <InputBox
            placeholder="Name"
            autoComplete="off"
            name="name"
            required
            onChange={(e) => (data.current.name = e.target.value)}
          />
          <InputBox
            name="email"
            placeholder="Email"
            required
            onChange={(e) => (data.current.email = e.target.value)}
          />
          <InputBox
            name="password"
            placeholder="Password"
            type="password"
            required
            onChange={(e) => (data.current.password = e.target.value)}
          />
            <button
              className="py-4 px-[88px] text-lg font-bold bg-[#9FB7CE] rounded-xl"
              onClick={register}
            >
              Sign Up
            </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
