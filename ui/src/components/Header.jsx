import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Button from "./Button";
import { useDarkMode } from "../hooks/useDarkMode";
import { useNavigate } from "react-router-dom";
import React from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Learn", href: "#learn" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "glass shadow-md py-3"
          : "bg-white dark:bg-neutral-950 py-4"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold text-neutral-900 dark:text-white link-hover"
            aria-label="CampaignAI Home"
          >
            CampaignAI
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-smooth font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-smooth focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              )}
            </button>
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button
              onClick={() => navigate("/home")}
              variant="primary"
              size="sm"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-smooth"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-smooth"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-slide-down">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-smooth font-medium py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="ghost" size="sm" className="w-full">
                Login
              </Button>
              <Button variant="primary" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
