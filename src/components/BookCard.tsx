"use client";
import { useCart } from "../app/context/CartContext";
import { Book } from "../app/types/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

type BookCardProps = {
  book: Book;
};

const BooksCards = ({ book }: BookCardProps) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyNow = () => {
    addToCart(book);
    router.push("/checkout");
  };

  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-100 ease-in-out mx-auto w-full sm:w-72 md:w-80 lg:w-72 cursor-pointer transform hover:scale-105">
      <div>
      </div>
      <Link href={`/${book.category}/${book.id}`} passHref>
        {/* Image Section */}
        <div className="relative w-full h-48 mb-4 flex justify-center items-center overflow-hidden rounded-lg">
          <Image
            src={book.image}
            alt={book.title}
            width={150}
            height={220}
            objectFit="cover"
            className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Book Data Section */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-black mb-1 hover:text-red-600 transition-colors duration-300 ease-in-out">
            {book.title}
          </h3>
          <p className="text-sm text-gray-700 mb-2 hover:text-gray-900 transition-colors duration-300 ease-in-out">
            {book.author}
          </p>
          <p className="text-md font-bold text-red-600 mb-4">{book.price}</p>
        </div>
      </Link>

      {/* Button Section */}
      <div className="flex flex-col w-60 mx-auto sm:w-auto sm:flex-row space-y-2 sm:space-x-2 sm:space-y-0">
        <button
          className="flex-1 bg-white text-red-600 border border-red-600 py-2 px-4 rounded hover:bg-red-600 hover:text-white transition-colors duration-300 ease-in-out"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
        <button
          className="flex-1 border bg-black  text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300 ease-in-out"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BooksCards;
