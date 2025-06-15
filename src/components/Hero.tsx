
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-darsen-blue/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-darsen-blue/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-darsen-black sm:text-5xl md:text-6xl animate-fade-in">
                <span className="block bg-gradient-to-r from-darsen-black to-darsen-blue bg-clip-text text-transparent">Global Import & Export</span>
                <span className="block bg-gradient-to-r from-darsen-blue to-purple-600 bg-clip-text text-transparent">Solutions by Darsen</span>
              </h1>
              <p className="mt-3 text-base text-darsen-gray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in delay-300">
                Your trusted partner for importing and exporting hardware, software, electronics, and premium food products worldwide. Connecting markets with quality and reliability.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-fade-in delay-500">
                <div className="rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-darsen-blue to-darsen-darkBlue hover:from-darsen-darkBlue hover:to-purple-700 transform hover:scale-105 transition-all duration-300 md:py-4 md:text-lg md:px-10">
                    Explore Products
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border-2 border-darsen-blue text-base font-medium rounded-md text-darsen-blue bg-white/80 backdrop-blur-sm hover:bg-darsen-blue hover:text-white transform hover:scale-105 transition-all duration-300 md:py-4 md:text-lg md:px-10">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Stats section */}
              <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 animate-fade-in delay-700">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-darsen-blue to-purple-600 bg-clip-text text-transparent">15+</div>
                  <div className="text-sm text-darsen-gray">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-darsen-blue to-purple-600 bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-darsen-gray">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-darsen-blue to-purple-600 bg-clip-text text-transparent">1000+</div>
                  <div className="text-sm text-darsen-gray">Happy Clients</div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full overflow-hidden">
          <img
            className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-700"
            src="https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
            alt="Global shipping and logistics"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darsen-blue/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
