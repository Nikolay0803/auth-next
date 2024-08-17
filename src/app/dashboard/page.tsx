import Image from "next/image";
import React from "react";
import avatar from "@/assets/Avatar.png"
import book from "@/assets/book-open-01.png"
import star from "@/assets/Star 2.png"
const DashboardPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-[60px] sm:px-6 lg:px-8">
      <div className="bg-white p-6 rounded-3xl flex gap-12">
        <div className="w-[96px] h-[96px]">
          <Image src={avatar} alt="avatar" />
        </div>
        <div>
          <div className="flex gap-[192px] mb-2">
            <p className="text-[#8A8A89]">Languages</p>
            <ul className="flex gap-4 font-medium">
              <li className="flex items-center gap-2 border-r border-gray-300">
                <div className="w-4 h-4">
                  <Image src={book} alt="book" />
                </div>
                <p className="pr-4">Lessons online</p>
              </li>
              <li className="flex items-center gap-2 border-r border-gray-300">
                <p className="pr-4">Lessons done: 1098</p>
              </li>
              <li className="flex items-center gap-2 border-r border-gray-300">
                <div className="w-4 h-4">
                  <Image src={star} alt="star" />
                </div>
                <p className="pr-4">Rating: 4.8</p>
              </li>
              <li className="flex items-center gap-2">
                <p>
                  Price / 1 hour: <span className="text-[#38CD3E]">30$</span>
                </p>
              </li>
            </ul>
          </div>
          <h2 className="text-2xl font-medium">Jane Smith</h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
