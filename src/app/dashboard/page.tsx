"use client";

import React, { useState } from "react";
import { teachers, Teacher } from "@/lib/teachers-info-data";
import Image from "next/image";
import ListBox from "@/components/ListBox";
import Star from "@/assets/star.svg?react";
import Book from "@/assets/book.svg?react";
import Heart from "@/assets/heart.svg?react";
import Modal from "@/components/BookingModal";
import {
  languages,
  level,
  price,
} from "@/app/dashboard/user/teachers-data/teachers-data";

const DashboardPage = () => {
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});
  const [showReviews, setShowReviews] = useState<Record<number, boolean>>({});
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const handleFavorite = (index: number) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [index]: !prevFavorites[index],
    }));
  };

  const handleReadMore = (index: number) => {
    setShowReviews((prevShowReviews) => ({
      ...prevShowReviews,
      [index]: true,
    }));
  };

  const openModal = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
  };

  const closeModal = () => {
    setSelectedTeacher(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pb-[60px] sm:px-6 lg:px-8">
      <div className="flex gap-5 mb-8">
        <ListBox
          label="Languages"
          placeholder="Languages"
          options={languages}
          className="w-[221px]"
        />
        <ListBox
          label="Level of knowledge"
          placeholder="Level"
          options={level}
          className="w-[198px]"
        />
        <ListBox
          label="Price"
          placeholder="Price"
          options={price}
          className="w-[124px]"
        />
      </div>
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
                  <Book />
                  <p className="pr-4 dark:text-[#E4E4E4]">Lessons online</p>
                </li>
                <li className="flex items-center gap-2 border-r border-gray-300 dark:border-gray-600">
                  <p className="pr-4 dark:text-[#E4E4E4]">
                    Lessons done: {teacher.lessonsDone}
                  </p>
                </li>
                <li className="flex items-center gap-2 border-r border-gray-300 dark:border-gray-600">
                  <Star className="w-5 h-5 fill-[#FFC531]" />
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
              <button
                onClick={() => handleFavorite(index)}
                className="h-[26px] w-[26px]"
              >
                <Heart
                  className={`${
                    favorites[index]
                      ? "fill-[#F0AA8D] dark:fill-[#d63737]"
                      : "fill-none"
                  }`}
                />
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
            {!showReviews[index] && (
              <button
                onClick={() => handleReadMore(index)}
                className="text-[#121417] dark:text-[#E4E4E4] font-medium underline mb-10"
              >
                Read more
              </button>
            )}

            {showReviews[index] &&
              teacher.reviews &&
              teacher.reviews.length > 0 && (
                <ul className="flex flex-col gap-8 mb-8 mt-4">
                  {teacher.reviews.map((review, reviewIndex) => (
                    <li key={reviewIndex} className="flex flex-col gap-3">
                      <div className="flex gap-3">
                        <div className="w-11 h-11">
                          <Image
                            src={review.photo}
                            alt={review.name}
                            width={44}
                            height={44}
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#8A8A89] dark:text-[#CCCCCC]">
                            {review.name}
                          </h4>
                          <div className="flex gap-2 items-center">
                            <Star className="w-4 h-4 fill-[#FFC531]" />
                            <span className="text-[#121417] dark:text-[#E4E4E4] font-medium">
                              {review.rating.toFixed(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#121417] dark:text-[#E4E4E4] font-medium">
                        {review.text}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

            <ul className="flex gap-2">
              {teacher.levels.map((level, index) => (
                <li
                  key={index}
                  className="py-2 px-3 rounded-3xl font-medium bg-[#F8F8F8] dark:bg-[#2A2A2A]"
                >
                  {level}
                </li>
              ))}
            </ul>
            {showReviews[index] && (
              <button
                onClick={() => openModal(teacher)}
                className="mt-8 py-4 px-[48px] text-lg font-bold bg-[#9FB7CE] dark:bg-[#3A5068] text-[#121417] dark:text-[#E4E4E4] rounded-xl"
              >
                Book trial lesson
              </button>
            )}
          </div>
        </div>
      ))}

      {selectedTeacher && (
        <Modal teacher={selectedTeacher} onClose={closeModal} />
      )}
    </div>
  );
};

export default DashboardPage;
