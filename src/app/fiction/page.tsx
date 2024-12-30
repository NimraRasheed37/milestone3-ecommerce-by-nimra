"use client";
import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard"; // Make sure this path is correct
import { Book } from "../types/type"; // Make sure the path is correct
import Categories from "@/components/Categories";

const FictionPage = () => {
  const [books, setBooks] = useState<Book[]>([]); // To store the fetched books data
  const [error, setError] = useState<string>(""); // To handle any errors during fetch

  // Fetch books on component mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books/fiction"); 
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
      <h1 className="text-3xl font-bold mb-8">Fiction Books</h1>
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

export default FictionPage;
