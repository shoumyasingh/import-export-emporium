
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
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="text-3xl font-bold font-jakarta bg-gradient-to-r from-darsen-blue via-purple-600 to-darsen-darkBlue bg-clip-text text-transparent transform group-hover:scale-105 transition-all duration-300">
                DARSEN
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className="text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium font-inter transition-all duration-300 relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-darsen-blue to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/products" className="text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium font-inter transition-all duration-300 relative group py-2">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-darsen-blue to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/services" className="text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium font-inter transition-all duration-300 relative group py-2">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-darsen-blue to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium font-inter transition-all duration-300 relative group py-2">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-darsen-blue to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium font-inter transition-all duration-300 relative group py-2">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-darsen-blue to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <ThemeToggle />
            <Button className="bg-gradient-to-r from-darsen-blue to-darsen-darkBlue hover:from-darsen-darkBlue hover:to-purple-700 text-white font-medium font-inter px-6 py-2.5 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl glass border-0">
              Request a Quote
            </Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-xl text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 transition-colors duration-300 glass dark:glass-dark"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden animate-slide-up">
          <div className="px-6 pt-4 pb-6 space-y-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/50">
            <Link 
              to="/" 
              className="block px-4 py-3 text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium font-inter transition-all duration-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-4 py-3 text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium font-inter transition-all duration-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/services" 
              className="block px-4 py-3 text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium font-inter transition-all duration-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-3 text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium font-inter transition-all duration-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block px-4 py-3 text-darsen-black dark:text-white hover:text-darsen-blue dark:hover:text-blue-400 font-medium font-inter transition-all duration-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-gradient-to-r from-darsen-blue to-darsen-darkBlue hover:from-darsen-darkBlue hover:to-purple-700 text-white font-medium font-inter mt-4 py-3 shadow-lg">
              Request a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
