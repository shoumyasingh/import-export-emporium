
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-darsen-black dark:text-white">404</h1>
          <p className="text-xl text-darsen-gray dark:text-gray-300 mb-4">Oops! Page not found</p>
          <a href="/" className="text-darsen-blue hover:text-darsen-darkBlue underline">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
