
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navbar />
      
      <div className="pt-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-darsen-blue/5 to-purple-400/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-cyan-400/5 to-darsen-blue/5 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>
        
        <div className="flex items-center justify-center min-h-screen relative z-10">
          <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass dark:glass-dark p-12 rounded-3xl border border-blue-200/30 dark:border-blue-400/30 shadow-2xl animate-fade-in">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-red-500 to-orange-500 text-white flex items-center justify-center mx-auto mb-8 shadow-lg">
                <AlertTriangle className="h-12 w-12" />
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 font-jakarta bg-gradient-to-r from-darsen-black to-darsen-blue dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                404
              </h1>
              
              <h2 className="text-3xl md:text-4xl font-bold text-darsen-black dark:text-white mb-6 font-jakarta">
                Page Not Found
              </h2>
              
              <p className="text-xl text-darsen-gray dark:text-gray-300 mb-8 font-inter leading-relaxed">
                Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.history.back()}
                  variant="outline" 
                  className="group glass dark:glass-dark border-darsen-blue/30 dark:border-blue-400/30 text-darsen-blue dark:text-blue-400 hover:bg-darsen-blue hover:text-white dark:hover:bg-blue-400 dark:hover:text-white px-8 py-3 text-lg font-semibold font-inter rounded-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  Go Back
                </Button>
                
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="group bg-gradient-to-r from-darsen-blue to-darsen-darkBlue hover:from-darsen-darkBlue hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold font-inter rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Return Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
