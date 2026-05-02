"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="px-4 sm:px-6 lg:px-8 flex items-center justify-center py-14">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center ">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl text-white font-bold leading-tight"
          >
            Find Your Next Book
          </motion.h1>

          {/* Subtext */}
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            Discover bestselling books, timeless classics, and new releases —
            all in one place.
          </p>

          {/* Button */}
          <Link href="/all-books">
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mt-6 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition"
            >
              Browse Now
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Banner;
