import React from "react";
import { Link } from "react-router-dom";
import { Search, Menu, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  logoUrl?: string;
  isAuthenticated?: boolean;
  onMenuToggle?: () => void;
}

const Header = ({
  logoUrl = "/public/images/Midas_isotipo.png",
  isAuthenticated = false,
  onMenuToggle = () => {},
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] =
    React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle();
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  return (
    <header className="w-full h-20 bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoUrl}
              alt="Midas Trading Academy"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold hidden sm:inline-block">
              Midas Trading Academy
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <div className="relative">
            <button
              onClick={toggleCoursesDropdown}
              className="flex items-center text-sm font-medium hover:text-primary transition-colors"
            >
              Courses
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isCoursesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg py-1 z-10">
                <Link
                  to="/courses/forex"
                  className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                >
                  Forex Trading
                </Link>
                <Link
                  to="/courses/stocks"
                  className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                >
                  Stock Market
                </Link>
                <Link
                  to="/courses/crypto"
                  className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                >
                  Cryptocurrency
                </Link>
                <Link
                  to="/courses/all"
                  className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                >
                  View All Courses
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Search and Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search courses..."
              className="w-full bg-background border border-input rounded-md py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {isAuthenticated ? (
            <Link to="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-background border-b border-border transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-screen py-4" : "max-h-0",
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search courses..."
              className="w-full bg-background border border-input rounded-md py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Link
            to="/"
            className="py-2 text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <button
            onClick={toggleCoursesDropdown}
            className="flex items-center justify-between py-2 text-sm font-medium hover:text-primary transition-colors w-full text-left"
          >
            Courses
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isCoursesDropdownOpen && "rotate-180",
              )}
            />
          </button>
          {isCoursesDropdownOpen && (
            <div className="pl-4 space-y-2 border-l border-border">
              <Link
                to="/courses/forex"
                className="block py-2 text-sm hover:text-primary transition-colors"
              >
                Forex Trading
              </Link>
              <Link
                to="/courses/stocks"
                className="block py-2 text-sm hover:text-primary transition-colors"
              >
                Stock Market
              </Link>
              <Link
                to="/courses/crypto"
                className="block py-2 text-sm hover:text-primary transition-colors"
              >
                Cryptocurrency
              </Link>
              <Link
                to="/courses/all"
                className="block py-2 text-sm hover:text-primary transition-colors"
              >
                View All Courses
              </Link>
            </div>
          )}
          <Link
            to="/about"
            className="py-2 text-sm font-medium hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="py-2 text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <div className="pt-2 flex flex-col space-y-2">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button className="w-full">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full">Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
