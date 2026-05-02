
import Image from "next/image";
import { getData } from "../shared/getData";
import Link from "next/link";


const Books = async () => {
 
  const data = await getData()

  const books = data?.book;
  return (
    <div  className="px-4 sm:px-6 lg:px-8 bg-slate-200 py-5">
      <h1 className="font-bold text-xl my-3">Top 4 Featured</h1>
      {!books && (
        <p className="text-center font-bold text-2xl text-red-500 my-5">
          Loading<span className="loading loading-dots loading-xl"></span>
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3 lg:grid-cols-4  max-sm:px-3">
        {books &&
          books.slice(0, 4).map((book) => {
            return (
              <div key={book.id} className="p-3 bg-white hover:scale-105 duration-500 ease-in-out rounded-lg">
                <div className="">
                  <figure>
                    <Image
                      src={book.image_url}
                      width={50}
                      height={50}
                      alt="Phone"
                      className="w-40 h-50 rounded-2xl mx-auto"
                    />
                  </figure>
                  <div className="card-body p-0 mt-3 pl-3 max-sm:text-center">
                    <h2 className="card-title max-sm:just">{book.title}</h2>
                    <p className="font-bold text-red-400">Price: {book.price}</p>
                    <p>{book.category}</p>
                    <Link href={`/details/${book.id}`} className="card-actions justify-center">
                      <button className="btn">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Books;
