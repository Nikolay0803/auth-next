"use client";

import React, { useState } from "react";
import Image from "next/image";
import Close from "@/assets/close.svg?react";
import { Teacher } from "@/lib/teachers-info-data";

type BookingModalProps = {
  teacher: Teacher;
  onClose: () => void;
};

const BookingModal = ({ teacher, onClose }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 backdrop-blur-sm">
      <div className="relative max-w-[566px] bg-white rounded-[30px] p-[64px] dark:bg-[#1F1F1F]">
        <button className="absolute top-4 right-4 w-8 h-8" onClick={onClose}>
          <Close />
        </button>
        <h2 className="text-[40px] font-medium mt-3 mb-5 text-gray-900 dark:text-gray-100">
          Book trial lesson
        </h2>
        <p className="text-[#8b8b8b] dark:text-gray-400 mb-10">
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12">
            <Image src={teacher.avatar} alt={teacher.name} />
          </div>
          <div>
            <p className="text-sm font-medium text-[#8A8A89]">Your teacher</p>
            <h2 className="font-medium text-gray-900 dark:text-gray-100">
              {teacher.name}
            </h2>
          </div>
        </div>
        <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border rounded-xl disabled:border-slate-100 w-full block outline-none py-4 px-[18px] transition-all text-xs lg:text-sm xl:text-base bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border rounded-xl disabled:border-slate-100 w-full block outline-none py-4 px-[18px] transition-all text-xs lg:text-sm xl:text-base bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message to the teacher"
            className="border rounded-xl disabled:border-slate-100 w-full block outline-none py-4 px-[18px] transition-all text-xs lg:text-sm xl:text-base bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            required
          />
          <button
            type="submit"
            className="py-4 px-[88px] text-lg font-bold bg-[#9FB7CE] rounded-xl dark:bg-[#3B82F6] dark:text-white"
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
