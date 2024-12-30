"use client";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { Book } from "../app/types/type";
import Link from "next/link";

const AllBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books/fiction");
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data.slice(0, 6)); 
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link href="/books">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllBooks;
