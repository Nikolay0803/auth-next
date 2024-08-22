"use client";

import React, { useState } from "react";
import InputBox from "@/components/InputBox";
import { Backend_URL } from "@/lib/Constants";
import Image from "next/image";
import Link from "next/link";
import close from "@/assets/x.png";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormInputs>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormInputs, string>>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (data: FormInputs) => {
    const errors: Partial<Record<keyof FormInputs, string>> = {};

    if (!data.name || data.name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Invalid email format";
    }
    if (!data.password || data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch(Backend_URL + "/auth/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorText = await res.text();
        toast.error(`Error: ${errorText}`);
        return;
      }

      const response = await res.json();
      toast.success("User registered!");
      console.log({ response });

      router.push("/api/auth/signin");
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to register. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 backdrop-blur-sm">
      <div className="relative max-w-[566px] bg-white rounded-[30px] p-[64px] dark:bg-[#1F1F1F]">
        <Link className="absolute top-4 right-4 w-8 h-8" href={"/"}>
          <Image src={close} alt="close" className="dark:invert" />
        </Link>
        <h1 className="text-[40px] font-medium mt-3 mb-5 text-gray-900 dark:text-gray-100">
          Registration
        </h1>
        <p className="text-[#8b8b8b] dark:text-gray-400 mb-10">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <form
          className="p-2 flex flex-col gap-[18px] mb-10"
          onSubmit={onSubmit}
        >
          <InputBox
            placeholder="Name"
            autoComplete="off"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <InputBox
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputBox
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <button
            type="submit"
            className="py-4 px-[88px] text-lg font-bold bg-[#9FB7CE] rounded-xl dark:bg-[#3B82F6] dark:text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
