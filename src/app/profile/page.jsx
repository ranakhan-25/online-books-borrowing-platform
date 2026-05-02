"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "My Profile | Online Book Borrowing Platform",
  description: "Manage your profile, view borrowed books, and account settings.",
};



const ProfilePage = () => {
  
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const imageSrc =
    user?.image && user.image.startsWith("http") ? user.image : null;
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6 text-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          {imageSrc ? (
            <Image
              width={96}
              height={96}
              src={imageSrc}
              alt={user?.name || "user"}
              className="w-24 h-24 rounded-full border-4 border-primary"
            />
          ) : (
            <div className="bg-blue-500 text-white w-24 h-24 flex items-center justify-center text-2xl rounded-full border-4 border-primary">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-bold mt-4">{user?.name}</h2>
        <p className="text-gray-500">{user?.email}</p>

        <div className="mt-4 text-sm text-gray-400">
          <p>User ID: {user?.id}</p>
        </div>

        {/* Button */}
        <Link href="/update-profile">
          <button className="btn btn-primary mt-5 w-full">Edit Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
