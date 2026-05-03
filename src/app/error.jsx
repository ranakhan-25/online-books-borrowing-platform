"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-600 via-pink-600 to-purple-700 text-white relative overflow-hidden">
      
      {/* Animated 404 Heading */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-extrabold drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Error Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-lg text-center max-w-md"
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 flex gap-4"
      >
        <Link
          href="/"
          className="px-6 py-2 bg-white text-red-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
        >
          Go Home
        </Link>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
        >
          Reload
        </button>
      </motion.div>

      {/* Floating Glow Animation */}
      <motion.div
        className="absolute w-72 h-72 bg-pink-400 opacity-30 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
    </div>
  );
}
