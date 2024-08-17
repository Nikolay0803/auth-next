"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputBox from "@/components/InputBox";
import Link from "next/link";
import Image from "next/image";
import close from "@/assets/x.png";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
      callbackUrl: "/dashboard",
    });

    if (result?.error) {
      // Встановлюємо повідомлення про помилку
      switch (result.error) {
        case "CredentialsSignin":
          setError("Неправильний логін або пароль");
          break;
        default:
          setError("Сталася помилка при вході");
          break;
      }
    } else if (result?.ok && result.url) {
      router.push(result.url);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-[566px] bg-white rounded-[30px] p-[64px]">
        <Link className="absolute top-4 right-4 w-8 h-8" href={"/"}>
          <Image src={close} alt="close" />
        </Link>
        <h1 className="text-[40px] font-medium mt-3 mb-5">Log In</h1>
        <p className="text-[#8b8b8b] mb-10">
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form
          className="p-2 flex flex-col gap-[18px] mb-10"
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
            className="py-4 px-[88px] text-lg font-bold bg-[#9FB7CE] rounded-xl"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
