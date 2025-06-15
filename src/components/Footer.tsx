import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gradient-to-br from-darsen-black via-gray-900 to-darsen-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 animate-fade-in">
            <div className="text-4xl font-bold bg-gradient-to-r from-white via-blue-300 to-purple-400 bg-clip-text text-transparent mb-4 transform hover:scale-105 transition-transform duration-300">
              DARSEN
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Darsen is your trusted partner for global import and export solutions. We connect businesses worldwide with quality products and reliable services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white p-2 rounded-full bg-white/10 hover:bg-darsen-blue transition-all duration-300 transform hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white p-2 rounded-full bg-white/10 hover:bg-darsen-blue transition-all duration-300 transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white p-2 rounded-full bg-white/10 hover:bg-darsen-blue transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white p-2 rounded-full bg-white/10 hover:bg-darsen-blue transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in delay-200">
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="animate-fade-in delay-300">
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Hardware</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Electronics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Food Items</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-in delay-400">
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors duration-300">123 Global Trade Center</li>
              <li className="hover:text-white transition-colors duration-300">New York, NY 10001</li>
              <li className="hover:text-white transition-colors duration-300">+1 (555) 123-4567</li>
              <li className="hover:text-white transition-colors duration-300">darsenenterprises@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Darsen Import Export. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-gradient-to-r from-darsen-blue to-purple-600 rounded-full hover:from-purple-600 hover:to-darsen-blue transform hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
