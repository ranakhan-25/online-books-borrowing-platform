"use client";
import { motion } from "framer-motion";

export default function AnimatedSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4"
        >
          ✨ Explore Our Collection
        </motion.h2>

        {/* Animated Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg mb-10 text-gray-200"
        >
          Hand‑picked books with smooth animations for a modern experience.
        </motion.p>

        {/* Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["The Great Gatsby", "1984", "Atomic Habits"].map((title, index) => (
            <motion.div
              key={title}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 * index, duration: 0.8 }}
              className="bg-white text-black rounded-lg shadow-lg p-6 hover:scale-[1.05] transition"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700 mb-4">
                A short description about {title}.
              </p>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
