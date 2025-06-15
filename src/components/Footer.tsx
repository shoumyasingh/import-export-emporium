
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
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 animate-fade-in space-y-8">
            <div className="text-4xl font-bold bg-gradient-to-r from-white via-blue-300 to-purple-400 bg-clip-text text-transparent font-jakarta transform hover:scale-105 transition-transform duration-300">
              DARSEN
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed font-inter text-lg">
              Darsen is your trusted partner for global import and export solutions. We connect businesses worldwide with quality products and reliable services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white p-3 rounded-2xl glass border border-white/10 hover:bg-darsen-blue transition-all duration-300 transform hover:scale-110">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white p-3 rounded-2xl glass border border-white/10 hover:bg-darsen-blue transition-all duration-300 transform hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white p-3 rounded-2xl glass border border-white/10 hover:bg-darsen-blue transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white p-3 rounded-2xl glass border border-white/10 hover:bg-darsen-blue transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in delay-200">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-jakarta">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter">Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="animate-fade-in delay-300">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-jakarta">Products</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter">Hardware</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter">Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter">Electronics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block font-inter">Food Items</a></li>
            </ul>
          </div>
          
          <div className="animate-fade-in delay-400">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-jakarta">Contact</h3>
            <ul className="space-y-4 text-gray-400 font-inter">
              <li className="hover:text-white transition-colors duration-300">123 Global Trade Center</li>
              <li className="hover:text-white transition-colors duration-300">New York, NY 10001</li>
              <li className="hover:text-white transition-colors duration-300">+1 (555) 123-4567</li>
              <li className="hover:text-white transition-colors duration-300">darsenenterprises@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-inter">
            &copy; {new Date().getFullYear()} Darsen Import Export. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 font-inter">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 font-inter">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-4 bg-gradient-to-r from-darsen-blue to-purple-600 rounded-2xl hover:from-purple-600 hover:to-darsen-blue transform hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
