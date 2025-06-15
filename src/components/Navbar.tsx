
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-blue-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="text-3xl font-bold bg-gradient-to-r from-darsen-blue via-purple-600 to-darsen-darkBlue bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300">
                DARSEN
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-darsen-blue to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/products" className="text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium transition-colors duration-300 relative group">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-darsen-blue to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/services" className="text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium transition-colors duration-300 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-darsen-blue to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium transition-colors duration-300 relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-darsen-blue to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium transition-colors duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-darsen-blue to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <ThemeToggle />
            <Button className="bg-gradient-to-r from-darsen-blue to-darsen-darkBlue hover:from-darsen-darkBlue hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
              Request a Quote
            </Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-t border-blue-100 dark:border-gray-700">
            <Link 
              to="/" 
              className="block px-3 py-2 text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-gradient-to-r from-darsen-blue to-darsen-darkBlue hover:from-darsen-darkBlue hover:to-purple-700 text-white mt-3 shadow-lg">
              Request a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
