"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart, FiX, FiChevronDown } from "react-icons/fi";
import { useCart } from "@/app/context/CartContext";

const Header = () => {
  const { cartItems } = useCart();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleCartSidebar = () => setIsCartSidebarOpen((prev) => !prev);
  const toggleCategories = () => setIsCategoriesOpen((prev) => !prev);
  const toggleMobileCategories = () => setIsMobileCategoriesOpen((prev) => !prev);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between py-4 px-6">
        {/* Sidebar Toggle Icon */}
        <button className="md:hidden mr-4" onClick={toggleMobileMenu}>
          <FaBars size={24} className="text-red-800 cursor-pointer" />
        </button>

        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/img/logo/Ababeel (4).png"
              alt="logo"
              className="h-14"
              width={150}
              height={56}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 relative z-50 text-red-950 font-bold">
          <Link href="/" className="block hover:text-red-800">Home</Link>
          <Link href="/books" className="block hover:text-red-800">Books</Link>
          <div className="relative">
            <button onClick={toggleCategories} className="flex items-center hover:text-red-800">
              Categories <FiChevronDown className="ml-1" />
            </button>
            {isCategoriesOpen && (
              <div className="absolute bg-white shadow-md w-40 mt-2 rounded-md">
                <Link href="/urdu" className="block px-4 py-2 hover:bg-gray-100">Urdu</Link>
                <Link href="/english" className="block px-4 py-2 hover:bg-gray-100">English</Link>
                <Link href="/fiction" className="block px-4 py-2 hover:bg-gray-100">Fiction</Link>
                <Link href="/fantasy" className="block px-4 py-2 hover:bg-gray-100">Fantasy</Link>
              </div>
            )}
          </div>
          <Link href="/request-book" className="block hover:text-red-800">
            Request a Book
          </Link>
          <Link href="/contact" className="block hover:text-red-800">
            Contact
          </Link>
        </nav>

        {/* Cart Icon */}
        <button
          onClick={toggleCartSidebar}
          className="flex items-center space-x-2 text-red-800 hover:text-red-600"
        >
          <FiShoppingCart size={24} />
          <span className="md:inline"> ({cartItems.length})</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed top-0 left-0 h-full w-64 bg-white text-black transform transition-transform duration-300 z-40",
          { "-translate-x-full": !isMobileMenuOpen, "translate-x-0": isMobileMenuOpen }
        )}
      >
        <button
          className="absolute top-4 right-4 text-black"
          onClick={toggleMobileMenu}
        >
          <FiX size={24} />
        </button>
        <Image src="/img/logo/Ababeel (4).png" className="p-4" alt="Logo" width={150} height={50} />
        <nav className="p-4 space-y-4 font-bold">
          <Link href="/" className="block hover:text-red-800">Home</Link>
          <Link href="/books" className="block hover:text-red-800">Books</Link>
          <div className="relative">
            <button onClick={toggleMobileCategories} className="flex items-center hover:text-red-800">
              Categories <FiChevronDown className="ml-1" />
            </button>
            {isMobileCategoriesOpen && (
              <div className="mt-2">
                <Link href="/urdu" className="block px-4 py-2 font-semibold hover:bg-red-600 hover:text-white">Urdu</Link>
                <Link href="/english" className="block px-4 py-2 font-semibold hover:bg-red-600 hover:text-white">English</Link>
                <Link href="/fiction" className="block px-4 py-2 font-semibold hover:bg-red-600 hover:text-white">Fiction</Link>
                <Link href="/fantasy" className="block px-4 py-2 font-semibold hover:bg-red-600 hover:text-white">Fantasy</Link>
              </div>
            )}
          </div>
          <Link href="/request-book" className="block hover:text-red-800">Request a Book</Link>
          <Link href="/contact" className="block hover:text-red-800">Contact</Link>
        </nav>
      </div>

      {/* Cart Sidebar */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-full sm:w-80 bg-white text-black shadow-lg transform transition-transform duration-300 z-50",
          { "translate-x-0": isCartSidebarOpen, "translate-x-full": !isCartSidebarOpen }
        )}
      >
        <button
          className="absolute top-4 right-4 text-black"
          onClick={toggleCartSidebar}
        >
          <FiX size={24} />
        </button>
        <div className="p-4 h-full flex flex-col">
          <h2 className="text-lg font-bold mb-4 mt-12 text-center text-red-900">Your Cart</h2>
          {cartItems.length > 0 ? (
            <div className="flex-1 overflow-y-auto">
              <ul className="space-y-4">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center gap-2">
                    <div>
                      <p className="font-bold text-sm ">{item.title}</p>
                      <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                    </div>
                    <div className="font-bold text-sm">{item.price}</div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-600 flex-1 overflow-y-auto">Your cart is empty.</p>
          )}
          {cartItems.length > 0 && (
            <div className="mt-6">
              <Link href="/cart">
              <button className="w-full bg-red-800 text-white py-2 px-4 rounded-md mb-2">
                Go To Cart
              </button>
              </Link>
              <button
                onClick={toggleCartSidebar}
                className="w-full bg-gray-200 text-red-800 py-2 px-4 rounded-md"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
