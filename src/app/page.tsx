import Image from "next/image";
import girl from "@/assets/block.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-[60px] sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6 mb-5">
        <div className="max-w-[720px] py-[60px] px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] bg-white dark:bg-[#313131] rounded-[30px]">
          <h2 className="font-medium text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-tight mb-[25px] text-[#121417] dark:text-[#E4E4E4]">
            Unlock your potential with the best{" "}
            <span className="bg-[#BFD6EA] dark:bg-[#3A5068] rounded-lg">
              language
            </span>{" "}
            tutors
          </h2>
          <p className="text-[#121417] dark:text-[#E4E4E4] mb-[20px] sm:mb-[30px] md:mb-[40px]">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Link
            className="block py-4 px-8 sm:px-[88px] text-lg font-bold bg-[#9FB7CE] dark:bg-[#3A5068] text-[#121417] dark:text-[#E4E4E4] rounded-xl text-center"
            href={"/dashboard"}
          >
            Get started
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={girl}
            alt="girl"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
          />
        </div>
      </div>
      <div className="border-2 border-dashed border-[#9FB7CE] dark:border-[#3A5068] px-6 sm:px-8 md:px-10 lg:px-[110px] py-8 sm:py-10 rounded-3xl">
        <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between">
          <li className="flex-1 flex gap-4 items-center">
            <p className="text-[24px] sm:text-[26px] md:text-[28px] font-medium text-[#121417] dark:text-[#E4E4E4]">
              32,000+
            </p>
            <p className="text-sm sm:text-base text-[#8b8b8b] dark:text-[#CCCCCC]">
              Experienced tutors
            </p>
          </li>
          <li className="flex-1 flex gap-4 items-center">
            <p className="text-[24px] sm:text-[26px] md:text-[28px] font-medium text-[#121417] dark:text-[#E4E4E4]">
              32,000+
            </p>
            <p className="text-sm sm:text-base text-[#8b8b8b] dark:text-[#CCCCCC]">
              Experienced tutors
            </p>
          </li>
          <li className="flex-1 flex gap-4 items-center">
            <p className="text-[24px] sm:text-[26px] md:text-[28px] font-medium text-[#121417] dark:text-[#E4E4E4]">
              32,000+
            </p>
            <p className="text-sm sm:text-base text-[#8b8b8b] dark:text-[#CCCCCC]">
              Experienced tutors
            </p>
          </li>
          <li className="flex-1 flex gap-4 items-center">
            <p className="text-[24px] sm:text-[26px] md:text-[28px] font-medium text-[#121417] dark:text-[#E4E4E4]">
              32,000+
            </p>
            <p className="text-sm sm:text-base text-[#8b8b8b] dark:text-[#CCCCCC]">
              Experienced tutors
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
