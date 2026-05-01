import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="px-4 sm:px-6 lg:px-8 flex items-center justify-center py-14">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center ">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight">
            Find Your Next Book
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            Discover bestselling books, timeless classics, and new releases —
            all in one place.
          </p>

          {/* Button */}
          <Link href="/all-books">
            <button className="mt-6 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition">
              Browse Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Banner;
