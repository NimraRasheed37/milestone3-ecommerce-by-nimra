import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaGoodreads } from 'react-icons/fa';  // Import React Icons

const Footer = () => {
  return (
    <>
      <footer className="bg-white shadow-md border-t-2 border-red-700">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <Image src="/img/logo/Ababeel (4).png" alt="Logo" width={150} height={50} />
            <p className="mt-2 text-gray-600">Your trusted source for books</p>
          </div>

          {/* Navigation Section */}
          <nav>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-x-6 md:space-y-0">
              <li>
                <Link href="/home" className="text-gray-600 hover:text-red-600">Home</Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-600 hover:text-red-600">Books</Link>
              </li>
              <li>
                <Link href="/request-book" className="text-gray-600 hover:text-red-600">Request a Book</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-red-600">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="mt-4 md:mt-0">
            <span className="inline-flex justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/nimra-rasheed-45a362125/" className="text-gray-500 ml-3">
                <FaLinkedin className="w-8 h-8 text-blue-500 hover:text-red-600" />
              </a>
              <a href="https://github.com/NimraRasheed37/" className="text-gray-500 ml-3">
                <FaGoodreads className="w-8 h-8 text-yellow-500 hover:text-red-600" />
              </a>
              <a href="https://www.instagram.com" className="text-gray-500 ml-3">
                <FaInstagram className="w-8 h-8 text-pink-500 hover:text-red-600" />
              </a>
            </span>
          </div>
        </div>
      </footer>


      {/* Bottom Copyright */}
      <div className="p-2 text-center text-sm text-white bg-red-700">
        <p>© 2024 Ababeel. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
 