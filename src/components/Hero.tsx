
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden pt-20">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-darsen-blue/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-darsen-blue/5 to-cyan-400/5 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-2xl animate-glow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Content Section */}
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass dark:glass-dark text-sm font-medium text-darsen-blue dark:text-blue-400 border border-blue-200/30 dark:border-blue-400/30">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                Trusted by 1000+ Global Partners
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold font-jakarta leading-tight tracking-tight">
                <span className="block bg-gradient-to-r from-darsen-black to-darsen-blue dark:from-white dark:to-blue-400 bg-clip-text text-transparent">Global Import</span>
                <span className="block bg-gradient-to-r from-darsen-blue to-purple-600 bg-clip-text text-transparent">& Export</span>
                <span className="block bg-gradient-to-r from-purple-600 to-darsen-darkBlue bg-clip-text text-transparent">Solutions</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-darsen-gray dark:text-gray-300 leading-relaxed font-inter max-w-2xl">
                Your trusted partner for importing and exporting <span className="font-semibold text-darsen-blue dark:text-blue-400">hardware, software, electronics,</span> and premium food products worldwide.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="group bg-gradient-to-r from-darsen-blue to-darsen-darkBlue hover:from-darsen-darkBlue hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold font-inter rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Explore Products
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button variant="outline" className="group glass dark:glass-dark border-darsen-blue/30 dark:border-blue-400/30 text-darsen-blue dark:text-blue-400 hover:bg-darsen-blue hover:text-white dark:hover:bg-blue-400 dark:hover:text-white px-10 py-4 text-lg font-semibold font-inter rounded-2xl transform hover:scale-105 transition-all duration-300">
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats section with glassmorphism */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center p-6 rounded-2xl glass dark:glass-dark border border-white/20 dark:border-gray-700/30 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold font-jakarta bg-gradient-to-r from-darsen-blue to-purple-600 bg-clip-text text-transparent">15+</div>
                <div className="text-sm md:text-base text-darsen-gray dark:text-gray-300 font-medium font-inter mt-2">Years Experience</div>
              </div>
              <div className="text-center p-6 rounded-2xl glass dark:glass-dark border border-white/20 dark:border-gray-700/30 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold font-jakarta bg-gradient-to-r from-darsen-blue to-purple-600 bg-clip-text text-transparent">50+</div>
                <div className="text-sm md:text-base text-darsen-gray dark:text-gray-300 font-medium font-inter mt-2">Countries Served</div>
              </div>
              <div className="text-center p-6 rounded-2xl glass dark:glass-dark border border-white/20 dark:border-gray-700/30 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold font-jakarta bg-gradient-to-r from-darsen-blue to-purple-600 bg-clip-text text-transparent">1000+</div>
                <div className="text-sm md:text-base text-darsen-gray dark:text-gray-300 font-medium font-inter mt-2">Happy Clients</div>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                alt="Global shipping and logistics"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darsen-blue/30 to-transparent"></div>
              
              {/* Floating testimonial card */}
              <div className="absolute bottom-8 left-8 right-8 glass dark:glass-dark p-6 rounded-2xl border border-white/30 dark:border-gray-700/30 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <p className="font-medium text-white text-lg font-inter leading-relaxed">
                      "Darsen has transformed our supply chain with their efficient import services."
                    </p>
                    <p className="mt-3 font-bold text-sm text-blue-200 font-inter">- John Smith, CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
