"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsBag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/product" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-gray-50 border-b border-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between md:justify-center h-10 gap-12">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/lg.svg" width={40} height={40} alt="logo" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-12 text-sm">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-gray-800 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-6 md:gap-12">
          <Link href="/search">
            <CiSearch className="size-5 cursor-pointer hover:text-gray-800" />
          </Link>
          <Link href="/cart">
            <BsBag className="size-5 cursor-pointer hover:text-gray-800" />
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-4 text-base">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
