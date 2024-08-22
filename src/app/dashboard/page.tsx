import React from "react";
import book from "@/assets/book-open-01.png";
import star from "@/assets/Star 2.png";
import heart from "@/assets/Vector.png";
import { teachers } from "@/lib/teachers-info-data";
import Image from "next/image";

const DashboardPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-[60px] sm:px-6 lg:px-8">
      {teachers.map((teacher, index) => (
        <div
          key={index}
          className="bg-white dark:bg-[#313131] p-6 rounded-3xl flex gap-12 mb-8"
        >
          <div className="w-[120px] h-[120px]">
            <Image src={teacher.avatar} alt="avatar" />
          </div>
          <div>
            <div className="flex gap-[149px] mb-2">
              <p className="text-[#8A8A89] dark:text-[#CCCCCC]">Languages</p>
              <ul className="flex gap-4 font-medium whitespace-nowrap">
                <li className="flex items-center gap-2 border-r border-gray-300 dark:border-gray-600">
                  <div className="w-4 h-4">
                    <Image src={book} alt="book" />
                  </div>
                  <p className="pr-4 dark:text-[#E4E4E4]">Lessons online</p>
                </li>
                <li className="flex items-center gap-2 border-r border-gray-300 dark:border-gray-600">
                  <p className="pr-4 dark:text-[#E4E4E4]">
                    Lessons done: {teacher.lessonsDone}
                  </p>
                </li>
                <li className="flex items-center gap-2 border-r border-gray-300 dark:border-gray-600">
                  <div className="w-4 h-4">
                    <Image src={star} alt="star" />
                  </div>
                  <p className="pr-4 dark:text-[#E4E4E4]">
                    Rating: {teacher.rating}
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <p className="dark:text-[#E4E4E4]">
                    Price / 1 hour:{" "}
                    <span className="text-[#38CD3E]">{teacher.price}$</span>
                  </p>
                </li>
              </ul>
              <button className="h-[26px] w-[26px]">
                <Image src={heart} alt="heart" />
              </button>
            </div>
            <h2 className="text-2xl font-medium mb-8 text-[#121417] dark:text-[#E4E4E4]">
              {teacher.name}
            </h2>
            <ul className="flex flex-col gap-2 mb-4">
              <li className="text-[#8A8A89] dark:text-[#CCCCCC] font-medium">
                Speaks:{" "}
                <span className="text-[#121417] dark:text-[#E4E4E4] font-medium">
                  {teacher.speaks}
                </span>
              </li>
              <li className="text-[#8A8A89] dark:text-[#CCCCCC] font-medium">
                Lesson Info:{" "}
                <span className="text-[#121417] dark:text-[#E4E4E4] font-medium">
                  {teacher.lessonInfo}
                </span>
              </li>
              <li className="text-[#8A8A89] dark:text-[#CCCCCC] font-medium">
                Conditions:{" "}
                <span className="text-[#121417] dark:text-[#E4E4E4] font-medium">
                  {teacher.conditions}
                </span>
              </li>
            </ul>
            <button className="text-[#121417] dark:text-[#E4E4E4] font-medium underline mb-10">
              Read more
            </button>
            <ul className="flex gap-2">
              {teacher.levels.map((level, index) => (
                <li
                  key={index}
                  className={`py-2 px-3 rounded-3xl font-medium ${
                    index === 0
                      ? "bg-[#9FB7CE] dark:bg-[#3A5068]"
                      : "bg-[#F8F8F8] dark:bg-[#2A2A2A]"
                  }`}
                >
                  {level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
