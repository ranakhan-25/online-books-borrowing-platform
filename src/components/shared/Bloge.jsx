"use client";
import { useState } from "react";

export default function BlogPage() {
  // Demo blog posts data
  const [posts] = useState([
    {
      id: 1,
      title: "Why Reading Books Improves Creativity",
      author: "John Doe",
      date: "April 25, 2026",
      content:
        "Books open up new worlds of imagination and help readers develop creative thinking skills...",
    },
    {
      id: 2,
      title: "Top 10 Must-Read Novels in 2026",
      author: "Jane Smith",
      date: "April 28, 2026",
      content:
        "From classics to modern masterpieces, here are the top 10 novels you should not miss...",
    },
    {
      id: 3,
      title: "How Digital Libraries Are Changing Education",
      author: "Rana",
      date: "April 30, 2026",
      content:
        "Digital libraries make knowledge more accessible, affordable, and interactive for students worldwide...",
    },
  ]);

  
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">📚 Books Blog</h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white text-black rounded-lg shadow-lg p-6 hover:scale-[1.02] transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-2">
              By {post.author} • {post.date}
            </p>
            <p className="text-gray-800 mb-4">{post.content}</p>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
