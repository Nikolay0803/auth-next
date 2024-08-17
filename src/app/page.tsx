import Image from "next/image";
import girl from "@/assets/block.png";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-[60px] sm:px-6 lg:px-8">
      <div className="flex gap-6 mb-5">
        <div className="w-[720px] py-[60px] px-[64px] bg-[#F8F8F8] rounded-[30px]">
          <h2 className="font-medium text-[48px] leading-tight mb-[25px]">
            Unlock your potential with the best{" "}
            <span className="bg-[#BFD6EA] rounded-lg">language</span> tutors
          </h2>
          <p className="text-[#121417] mb-[40px]">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className="py-4 px-[88px] text-lg font-bold bg-[#9FB7CE] rounded-xl">
            Get started
          </button>
        </div>
        <div>
          <Image src={girl} alt="girl" />
        </div>
      </div>
      <div className="border-2 border-dashed border-[#9FB7CE] px-[110px] py-10 rounded-3xl">
        <ul className="flex gap-[60px]">
          <li className="flex gap-4">
            <p className="text-[28px] font-medium">32,000+</p>
            <p className="max-w-[96px] text-[#8b8b8b]">Experienced tutors</p>
          </li>
          <li className="flex gap-4">
            <p className="text-[28px] font-medium">32,000+</p>
            <p className="max-w-[96px] text-[#8b8b8b]">Experienced tutors</p>
          </li>
          <li className="flex gap-4">
            <p className="text-[28px] font-medium">32,000+</p>
            <p className="max-w-[96px] text-[#8b8b8b]">Experienced tutors</p>
          </li>
          <li className="flex gap-4">
            <p className="text-[28px] font-medium">32,000+</p>
            <p className="max-w-[96px] text-[#8b8b8b]">Experienced tutors</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
