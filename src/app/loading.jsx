"use client";
import { motion } from "framer-motion";

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      
      {/* Animated Spinner */}
      <motion.div
        className="w-24 h-24 border-4 border-yellow-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      {/* Animated Text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="mt-8 text-2xl font-semibold tracking-wide"
      >
        Loading, please wait...
      </motion.h1>

      {/* Floating Glow Effect */}
      <motion.div
        className="absolute w-64 h-64 bg-pink-400 opacity-30 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
    </div>
  );
}
