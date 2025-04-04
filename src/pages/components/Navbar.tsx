import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { UseUser } from "../UserHook";
interface NavbarProps {
  isDashboard: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ isDashboard }) => {
  const router = useRouter();
  const { currentUser } = UseUser();
  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/");
      }
    });
  };
  return (
    <>
      {!isDashboard ? (
        <>
          <div className="w-screen flex items-center justify-around p-5 poppins-regular border-b border-b-slate-900 fixed">
            <div className="px-2 flex items-center gap-5">
              <Image
                src={"/images/logo.png"}
                alt="Logo"
                width={40}
                height={40}
                className="cursor-pointer"
              />
              <div className="px-2 flex items-center justify-center gap-5">
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">About</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href={"/signIn"} className="cursor-pointer">Sign In</Link>
              <Link
                href={"/signUp"}
                className="bg-slate-900 p-3 rounded-md text-white cursor-pointer border border-slate-900 hover:bg-white hover:text-slate-900  duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-screen flex items-center justify-around p-5 poppins-regular fixed bg-cyan-500/50 text-white">
            <div className="px-2 flex items-center gap-5">
              <Link href={"/"} className="flex items-center gap-3">
                <Image
                  src={"/images/logo.png"}
                  alt="Logo"
                  width={40}
                  height={40}
                  className="cursor-pointer"
                />
                <p className="text-2xl font-bold">DRSchecker</p>
              </Link>
              <div className="px-2 flex items-center justify-center gap-5">
                <p className="cursor-pointer">Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p>Welcome, {currentUser?.firstname || "Guest"} !</p>
              <div
                className="relative inset-0 w-12 h-12 cursor-pointer"
                onClick={() => logout()}
              >
                <Image
                  src={"/images/profile.jpg"}
                  fill
                  priority
                  sizes="(max-width: 20px), 100vw, 20px"
                  alt="Profile Picture"
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
