'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RequestABook() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookTitle: "",
    bookAuthor: "",
    additionalInfo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can send form data to an API or email service here
    alert("Your request has been submitted!");
    setFormData({ name: "", email: "", bookTitle: "", bookAuthor: "", additionalInfo: "" });
  };

  return (
    <>
    <div className="p-8 min-h-screen" style={{ backgroundImage: "url('/img/red-bg.jpeg')" }}>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6"
      >
        {/* Name Field */}
        <div>

        <Link href={"/"} /*target="_blank"*/ >
                  <Image
                  src="/img/logo/Ababeel (4).png"
                  className="mb-4 mx-auto"
                  alt="logo"
                  width={150}  
                  height={50}
                  />
                  </Link>
                  <h1 className="text-3xl font-bold text-center text-red-800 mb-6">Request a Book</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-red-900 font-bold">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-gray-300 border rounded-lg p-2 shadow-red-800 shadow-sm"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-red-900 font-bold">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 border rounded-lg p-2 shadow-red-800 shadow-sm"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Book Title Field */}
        <div className="mb-4">
          <label htmlFor="bookTitle" className="block text-red-900 font-bold">
            Book Title
          </label>
          <input
            type="text"
            id="bookTitle"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleChange}
            className="w-full border-gray-300 border rounded-lg p-2 shadow-red-800 shadow-sm"
            placeholder="Enter the book title"
            required
          />
        </div>

        {/* Book Author Field */}
        <div className="mb-4">
          <label htmlFor="bookAuthor" className="block text-red-900 font-bold">
            Author Name
          </label>
          <input
            type="text"
            id="bookAuthor"
            name="bookAuthor"
            value={formData.bookAuthor}
            onChange={handleChange}
            className="w-full border-gray-300 border rounded-lg p-2 shadow-red-800 shadow-sm"
            placeholder="Enter the author's name"
            required
          />
        </div>

        {/* Additional Info Field */}
        <div className="mb-4">
          <label htmlFor="additionalInfo" className="block text-red-900 font-bold">
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="w-full border-gray-300 border rounded-lg p-2 shadow-red-800 shadow-sm"
            placeholder="Any additional details or comments..."
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-700"
        >
          Submit Request
        </button>
      </form>
    </div>
    </>
  );
}
