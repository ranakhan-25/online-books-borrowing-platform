import { getData } from "@/components/shared/getData";
import Image from "next/image";
import React from "react";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = await getData();

  const books = data?.book || [];
  const book = books.find((book) => book.id == id);

  const {
    title,
    author,
    available_quantity,
    category,
    description,
    image_url,
    price,
  } = book;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-xl shadow-md">
        {/* 📸 Image */}
        <div className="flex justify-center md:w-1/3">
          <Image
            src={image_url}
            width={250}
            height={350}
            alt={title}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Details */}
        <div className="md:w-2/3 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>

          <p className="text-lg text-gray-600">
            <span className="font-semibold">Author:</span> {author}
          </p>

          <p className="text-md text-gray-500">
            <span className="font-semibold">Category:</span> {category}
          </p>

          <p className="text-md text-gray-500">
            <span className="font-semibold">Available:</span>{" "}
            {available_quantity} pcs
          </p>

          <p className="text-xl text-red-500 font-semibold">Price: ${price}</p>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-1">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Action button */}
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
