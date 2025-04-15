import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="/lovable-uploads/logo3.png"
                alt="Darsen Logo"
                className="h-20 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-darsen-black hover:text-darsen-blue font-medium">
              Home
            </Link>
            <Link to="/products" className="text-darsen-black hover:text-darsen-blue font-medium">
              Products
            </Link>
            <Link to="/services" className="text-darsen-black hover:text-darsen-blue font-medium">
              Services
            </Link>
            <Link to="/about" className="text-darsen-black hover:text-darsen-blue font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-darsen-black hover:text-darsen-blue font-medium">
              Contact
            </Link>
            <Button className="bg-darsen-blue hover:bg-darsen-darkBlue text-white">
              Request a Quote
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-darsen-black hover:text-darsen-blue"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link 
              to="/" 
              className="block px-3 py-2 text-darsen-black hover:text-darsen-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 text-darsen-black hover:text-darsen-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 text-darsen-black hover:text-darsen-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-darsen-black hover:text-darsen-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-darsen-black hover:text-darsen-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-darsen-blue hover:bg-darsen-darkBlue text-white mt-3">
              Request a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;