import { getData } from "@/components/shared/getData";
import SearchBooks from "@/components/shared/SearchBooks";


export const metadata = {
  title: "All Books | Online Book Borrowing Platform",
  description: "Browse all available books and find your next read easily.",
};


const AllBooksPage = async () => {
  const data = await getData();
  const books = data?.book || [];
  const category = data?.category || [];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 bg-gray-100 py-10">
      <h1 className="text-2xl font-bold my-4 mb-7 inline-block py-2 border-b-2">Featured Books</h1>

      <div className="">
        
        <SearchBooks books={books} category={category} />
      </div>
      
    </div>
  );
};

export default AllBooksPage;