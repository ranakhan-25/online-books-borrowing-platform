"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "../shared/NavLink";
import { MdOutlineMenuBook } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    router.refresh();
  };

  const user = session?.user;

  return (
    <nav className="bg-linear-to-r from-indigo-200 via-purple-200 to-pink-200  shadow-lg  text-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link href="/" className="text-2xl font-bold flex">
            <MdOutlineMenuBook className="text-purple-500" />
            <span>Books</span>
          </Link>

          
          <div className="hidden md:flex space-x-6 ">
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/all-books"}>All Phones</NavLink>
            <NavLink href={"/profile"}>Profile</NavLink>
          </div>

          {/* Right: User image + Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <p>{user?.name}</p>
            {isPending ? <span className="loading loading-dots loading-md"></span> : !user ? (
              <Link
                href="/signin"
                className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500"
              >
                Sign In
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500"
              >
                SignOut
              </button>
            )}
            <Link
              href="/register"
              className="bg-green-400 text-black px-3 py-1 rounded-md hover:bg-green-500 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">&#10005;</span>
              ) : (
                <span className="text-2xl">&#9776;</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-4 py-5 ">
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/all-books"}>All Phones</NavLink>
          <NavLink href={"/profile"}>Profile</NavLink>
          <div className="flex items-center space-x-2 mt-2">
            <Image
              src="https://i.ibb.co.com/Z6thJ1Mm/man1.jpg"
              alt="User"
              width={32}
              height={32}
              className="rounded-full border"
            />
            {isPending ? <span className="loading loading-dots loading-md"></span> : !user ? (
              <Link
                href="/signin"
                className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500"
              >
                Sign In
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500"
              >
                SignOut
              </button>
            )}
            <Link
              href="/register"
              className="bg-green-400 text-black px-3 py-1 rounded-md hover:bg-green-500 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
