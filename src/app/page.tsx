import Image from "next/image";
import girl from "@/assets/block.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-[60px] sm:px-6 lg:px-8">
      <div className="flex gap-6 mb-5">
        <div className="w-[720px] py-[60px] px-[64px] bg-white dark:bg-[#313131] rounded-[30px]">
          <h2 className="font-medium text-[48px] leading-tight mb-[25px] text-[#121417] dark:text-[#E4E4E4]">
            Unlock your potential with the best{" "}
            <span className="bg-[#BFD6EA] dark:bg-[#3A5068] rounded-lg">
              language
            </span>{" "}
            tutors
          </h2>
          <p className="text-[#121417] dark:text-[#E4E4E4] mb-[40px]">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Link
            className="py-4 px-[88px] text-lg font-bold bg-[#9FB7CE] dark:bg-[#3A5068] text-[#121417] dark:text-[#E4E4E4] rounded-xl"
            href={"/dashboard"}
          >
            Get started
          </Link>
        </div>
        <div>
          <Image src={girl} alt="girl" />
        </div>
      </div>
      <div className="border-2 border-dashed border-[#9FB7CE] dark:border-[#3A5068] px-[110px] py-10 rounded-3xl">
        <ul className="flex gap-[20px] justify-between">
          <li className="flex-1 flex gap-4">
            <p className="text-[28px] font-medium text-[#121417] dark:text-[#E4E4E4]">
              32,000+
            </p>
            <p className="max-w-[96px] text-[#8b8b8b] dark:text-[#CCCCCC]">
              Experienced tutors
            </p>
          </li>
          <li className="flex-1 flex gap-4">
            <p className="text-[28px] font-medium text-[#121417] dark:text-[#E4E4E4]">
              32,000+
            </p>
            <p className="max-w-[96px] text-[#8b8b8b] dark:text-[#CCCCCC]">
              Experienced tutors
            </p>
          </li>
          <li className="flex-1 flex gap-4">
            <p className="text-[28px] font-medium text-[#121417] dark:text-[#E4E4E4]">
              32,000+
            </p>
            <p className="max-w-[96px] text-[#8b8b8b] dark:text-[#CCCCCC]">
              Experienced tutors
            </p>
          </li>
          <li className="flex-1 flex gap-4">
            <p className="text-[28px] font-medium text-[#121417] dark:text-[#E4E4E4]">
              32,000+
            </p>
            <p className="max-w-[96px] text-[#8b8b8b] dark:text-[#CCCCCC]">
              Experienced tutors
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
