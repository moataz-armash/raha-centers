"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/public/assets/img/index.js";

const MainNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "الرئيسية", id: "home" },
    { href: "/whoAreWe", label: "من نحن", id: "about" },
    { href: "/about", label: "خدماتنا", id: "services" },
    { href: "/offers", label: "عروضنا", id: "offers" },
    { href: "/ourBranches", label: "فروعنا", id: "ourBranches" },
    // { href: "/blog", label: "المدونة", id: "blog" },
    { href: "/contact", label: "اتصل بنا", id: "contact" },
  ];

  return (
    <nav className="bg-white shadow-md relative z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-12 w-30">
              <Image
                src={Logo}
                alt="مراكز الراحة"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="font-bold transition-colors text-primary hover:text-primary/80">
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden md:flex bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition">
            احجز الان
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="font-medium transition-colors text-primary hover:text-primary/80"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}>
                احجز الان
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavbar;
