import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { UseUser } from "../_app";

export interface NavbarProps {
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
          <div className="w-full flex items-center justify-between px-10 py-3 lexend-normal  fixed bg-[#37a0ac] text-white z-10">
            <Link href={"/"} className="flex items-center gap-3">
              <Image
                src={"/images/logo.png"}
                alt="Logo"
                width={40}
                height={40}
                className="cursor-pointer"
              />
              <p className="md:text-2xl font-medium ">DRSchecker</p>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href={"/signIn"}
                className="lexend-normal cursor-pointer md:text-[16px] text-[14px]"
              >
                Sign In
              </Link>
              <Link
                href={"/signUp"}
                className="lexend-normal md:text-[16px] text-[14px] bg-slate-900 p-3 rounded-md text-white cursor-pointer border-none hover:bg-white hover:text-slate-900  duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex items-center justify-between px-10 py-3 lexend-normal  fixed bg-[#37a0ac] text-white z-10">
            <div className="px-2 flex items-center gap-5 w-full">
              <Link href={"/"} className="flex items-center gap-3">
                <Image
                  src={"/images/logo.png"}
                  alt="Logo"
                  width={40}
                  height={40}
                  className="cursor-pointer w-8 h-8 md:w-10 md:h-10"
                />
                <p className="text-[18px] md:text-2xl font-bold">DRSchecker</p>
              </Link>
              {currentUser?.role === "admin" && (
                <div className="flex items-center justify-center gap-5">
                  <Link href="#">Dashboard</Link>
                  <Link href="/admin/users/management">Users</Link>
                </div>
              )}
            </div>
            <div className="flex w-full items-center justify-center text-[16px] md:text-[16px]">
              <div className="flex items-center justify-end gap-3 w-full">
                <p>Welcome, {currentUser?.firstname || "Guest"} !</p>
                <div
                  className="relative inset-0 w-10 h-10 md:w-12 md:h-12 cursor-pointer"
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
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
