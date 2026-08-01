"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "News", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "My Work", path: "/work" },
    { name: "CV", path: "/cv" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setIsOpen(false);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <header className="header no-print">
      <div className="container header-container">
        <Link href="/" className="logo-brand" aria-label="Oluwatobi Enitan Home">
          <Image 
            src="/oluwatobi_enitan_logo.png" 
            alt="Oluwatobi Enitan" 
            width={260}
            height={65} 
            className="logo-img"
            priority
          />
        </Link>

        <button
          className={`nav-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Navigation"
          aria-expanded={isOpen}
          type="button"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-menu ${isOpen ? "open" : ""}`} aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        <div
          className={`nav-overlay ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(false)}
        />
      </div>
    </header>
  );
}
