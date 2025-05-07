import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { User, UseUser } from "./_app";

const userData: User = {
  currentUserEmail: "admin@gmail.com",
  email: "admin@gmail.com",
  firstname: "Ramel",
  lastname: "Panis",
  password: "admin1234",
  date: "August 2, 2002",
  role: "admin",
};
const SignIn = () => {
  const { users } = UseUser();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  // Getting the current logged in user
  const { setCurrentUser } = UseUser();
  const handleSignIn = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const foundAdmin = userData.email === email;

    if (foundAdmin) {
      if (userData.email != email || userData.password != password) {
        Swal.fire({
          icon: "error",
          title: "Signing In!",
          text: "Your Email or Password is incorrect.",
        });
      }
      if (userData.role === "admin" && userData.password === password) {
        setCurrentUser(userData);
        setEmail("");
        setPassword("");
        router.push("/admin");
      }
    } else {
      const foundUser = users.find((user) => user.email === email);
      if (!foundUser) {
        Swal.fire({
          icon: "error",
          title: "Signing In!",
          text: "Can't find your account, make sure you fill the fields correctly.",
        });
      } else if (password === "") {
        Swal.fire({
          icon: "error",
          title: "Signing In!",
          text: "Password field is empty.",
        });
      } else if (foundUser?.email != email || foundUser?.password != password) {
        Swal.fire({
          icon: "error",
          title: "Signing In!",
          text: "Your Email or Password is incorrect.",
        });
      }
      if (foundUser?.email === email && foundUser?.password === password) {
        setCurrentUser(foundUser);
        setEmail("");
        setPassword("");
        router.push("/users");
      }
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center poppins-regular">
      <div className="absolute inset-0">
        <div className="relative w-full h-screen aspect-[3000/1988]">
          <Image
            src={"/images/bg1.jpg"}
            sizes="(max-width: 3000px) 100vw, 1988"
            className="object-cover"
            alt="Landscape peaceful background"
            fill
            priority
          />
        </div>
      </div>
      <div className="bg-black/50 absolute inset-0"></div>
      <form
        onSubmit={handleSignIn}
        className="z-10 bg-white md:w-fit w-[400px] flex flex-col items-center justify-center md:border md:border-slate-300 md:shadow-lg rounded-md p-10 gap-10"
      >
        {/* Logo */}
        <div className="flex items-start w-full">
          <Link href="/" className="flex items-center gap-3">
            <Image
              width={100}
              height={100}
              src={"/images/logo.png"}
              alt="Logo"
              className="cursor-pointer w-14 h-14"
            />
            <p className="font-semibold">DRSchecker</p>
          </Link>
        </div>
        <p className="font-bold text-2xl">Sign In</p>
        {/* Input Fields */}
        <div className="flex flex-col w-full items-center justify-center gap-3">
          {/* Email */}
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-3">
            <div className="flex items-center gap-3 w-full">
              <div className="w-full border rounded-md px-3 py-2 flex items-center gap-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="outline-none"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
            </div>
            {/* Password */}
            <div className="w-full flex items-center gap-3">
              <div className="w-full border rounded-md px-3 py-2 flex items-center gap-3">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Sign In Button */}
        <div className="w-full flex items-center justify-center border-b pb-8">
          <button
            type="submit"
            className="flex items-center justify-center bg-yellow-500 border border-yellow-500 w-full py-2 rounded-md cursor-pointer hover:bg-white hover:text-yellow-500 text-white duration-300"
          >
            Sign In
          </button>
        </div>
        {/* Sign Up Link */}
        <div className="flex items-center gap-2 text-[14px] md:text-[16px]">
          <i>Don &#39; t have an account?</i>
          <Link href="/signUp" className="text-yellow-500">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
