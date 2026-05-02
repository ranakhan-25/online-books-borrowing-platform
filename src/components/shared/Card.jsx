import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Card = ({ book }) => {
  const {id,title,author,available_quantity,category,description, image_url,price, } = book;
  return (
    <div>
      <div className="p-3 bg-white rounded-lg hover:scale-105 duration-500 ease-in-out">
                <div className="">
                  <figure>
                    <Image
                      src={image_url}
                      width={50}
                      height={50}
                      alt={title}
                      className="w-40 h-50 rounded-2xl mx-auto"
                    />
                  </figure>
                  <div className="card-body p-0 mt-3 pl-3 max-sm:text-center">
                    <h2 className="card-title max-sm:just">{title}</h2>
                    <p className="font-bold text-red-400">Price: {price}</p>
                    <p>{category}</p>
                    <Link href={`/details/${id}`} className="card-actions justify-center">
                      <button className="btn">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>

    </div>
  )
}

export default Card