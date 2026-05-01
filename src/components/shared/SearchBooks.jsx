"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Card from "@/components/shared/Card";

export default function SearchBooks({ books, category }) {
  const pathname = usePathname();

  const [query, setQuery] = useState("");   
  const [searchText, setSearchText] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    setQuery("");
    setSearchText("");
    setSelectedCategory("all");
    setFilteredBooks(books);
  }, [pathname, books]);

 
  useEffect(() => {
    let result = books;

    
    if (selectedCategory !== "all") {
      result = result.filter(
        (book) =>
          book.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

   
    if (searchText.trim() !== "") {
      result = result.filter((book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredBooks(result);
  }, [searchText, selectedCategory, books]);

  
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(query);
  };

  return (
    <div className="sm:flex gap-4">
      
     
      <div className="sm:w-[20%]">
        <h1 className="text-lg font-bold mb-2">All Category</h1>

        <ul>
          <li
            onClick={() => setSelectedCategory("all")}
            className={`p-2 my-2 cursor-pointer rounded ${
              selectedCategory === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            All
          </li>

          {category.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelectedCategory(item.category)}
              className={`p-2 my-2 cursor-pointer rounded ${
                selectedCategory === item.category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              {item.category}
            </li>
          ))}
        </ul>
      </div>

     
      <div className="sm:w-[80%]">
        <form onSubmit={handleSearch} className="w-full mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border px-4 py-3 rounded-md"
              placeholder="Search Books..."
            />

            <button
              type="submit"
              className="px-4 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800"
            >
              Search
            </button>
          </div>
        </form>

        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <Card key={book.id} book={book} />
            ))
          ) : (
            <div className="col-span-full">
              <div className="mx-4 my-4 shadow h-40 flex items-center justify-center bg-white rounded-xl">
                No books found
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}