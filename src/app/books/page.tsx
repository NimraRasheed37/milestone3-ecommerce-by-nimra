"use client";
import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard"; 
import { Book } from "../types/type"; 
import Categories from "@/components/Categories";

const AllBooksPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string>("");

  // Fetch books on component mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books/english"); 
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data); 
      } catch (error) {
        setError("Error fetching books: " + (error instanceof Error ? error.message : "Unknown error"));
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>; // Show error message if fetching fails
  }

  return (
    <>
    <Categories/>
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">All Books</h1>
      {/* Display a message if no books are found */}
      {books.length === 0 ? (
        <div className="text-center text-lg text-gray-500">No books available</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  mx-auto gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} /> // Display each book using BookCard component
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default AllBooksPage;
