
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Users, Award, MapPin, Clock, Star, Trophy, Globe2, Shield } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navbar />
      
      <div className="pt-20">
        {/* Enhanced Hero Section */}
        <div className="relative bg-gradient-to-br from-darsen-blue via-darsen-darkBlue to-purple-700 text-white py-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-float delay-700"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-white/20 text-sm font-medium mb-8">
                <Globe2 className="h-4 w-4 mr-2" />
                About Darsen
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-jakarta bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                About Darsen
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-inter max-w-3xl">
                Your trusted partner for global import and export solutions, connecting businesses worldwide with innovative technology and premium products.
              </p>
            </div>
          </div>
        </div>
        
        <About />
        
        {/* Enhanced Values Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-darsen-blue/5 to-purple-400/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-cyan-400/5 to-darsen-blue/5 rounded-full blur-3xl animate-float delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass dark:glass-dark text-sm font-medium text-darsen-blue dark:text-blue-400 border border-blue-200/30 dark:border-blue-400/30 mb-6">
                <Award className="h-4 w-4 mr-2" />
                Our Core Values
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-jakarta bg-gradient-to-r from-darsen-black to-darsen-blue dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-6">
                The Principles That Guide Us
              </h2>
              <p className="mt-4 text-xl md:text-2xl text-darsen-gray dark:text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
                Built on a foundation of trust, innovation, and excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group animate-fade-in delay-100">
                <div className="glass dark:glass-dark p-8 rounded-3xl text-center border border-blue-200/30 dark:border-blue-400/30 hover:shadow-2xl hover:border-blue-300/50 dark:hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-darsen-blue to-purple-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Award className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-darsen-black dark:text-white mb-4 font-jakarta">Excellence</h3>
                  <p className="text-darsen-gray dark:text-gray-300 font-inter leading-relaxed">We strive for excellence in everything we do, from product quality to customer service.</p>
                </div>
              </div>
              
              <div className="group animate-fade-in delay-200">
                <div className="glass dark:glass-dark p-8 rounded-3xl text-center border border-blue-200/30 dark:border-blue-400/30 hover:shadow-2xl hover:border-blue-300/50 dark:hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-darsen-black dark:text-white mb-4 font-jakarta">Partnership</h3>
                  <p className="text-darsen-gray dark:text-gray-300 font-inter leading-relaxed">We build long-term partnerships based on mutual trust and shared success.</p>
                </div>
              </div>
              
              <div className="group animate-fade-in delay-300">
                <div className="glass dark:glass-dark p-8 rounded-3xl text-center border border-blue-200/30 dark:border-blue-400/30 hover:shadow-2xl hover:border-blue-300/50 dark:hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-darsen-black dark:text-white mb-4 font-jakarta">Global Reach</h3>
                  <p className="text-darsen-gray dark:text-gray-300 font-inter leading-relaxed">We leverage our global network to connect businesses across continents.</p>
                </div>
              </div>
              
              <div className="group animate-fade-in delay-400">
                <div className="glass dark:glass-dark p-8 rounded-3xl text-center border border-blue-200/30 dark:border-blue-400/30 hover:shadow-2xl hover:border-blue-300/50 dark:hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-darsen-black dark:text-white mb-4 font-jakarta">Reliability</h3>
                  <p className="text-darsen-gray dark:text-gray-300 font-inter leading-relaxed">We deliver on our promises, ensuring timely and dependable service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Enhanced Team Section */}
        <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass dark:glass-dark text-sm font-medium text-darsen-blue dark:text-blue-400 border border-blue-200/30 dark:border-blue-400/30 mb-6">
                <Users className="h-4 w-4 mr-2" />
                Our Leadership
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-jakarta bg-gradient-to-r from-darsen-black to-darsen-blue dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-6">
                Meet Our Expert Team
              </h2>
              <p className="mt-4 text-xl md:text-2xl text-darsen-gray dark:text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
                Driven professionals with decades of combined experience in global trade
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group animate-fade-in delay-100">
                <div className="glass dark:glass-dark rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20 dark:border-gray-700/30">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                      alt="CEO" 
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darsen-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-darsen-black dark:text-white font-jakarta">John Smith</h3>
                        <p className="text-darsen-blue dark:text-blue-400 font-medium mb-2 font-inter">CEO & Founder</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-darsen-gray dark:text-gray-300 font-inter leading-relaxed">Over 20 years of experience in international trade and business development.</p>
                    <div className="mt-6 flex items-center space-x-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-darsen-blue/10 text-darsen-blue dark:bg-blue-400/10 dark:text-blue-400">
                        <Trophy className="h-3 w-3 mr-1" />
                        Leadership
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-400/10 dark:text-green-400">
                        <Shield className="h-3 w-3 mr-1" />
                        Strategy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group animate-fade-in delay-200">
                <div className="glass dark:glass-dark rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20 dark:border-gray-700/30">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                      alt="Operations Director" 
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-darsen-black dark:text-white font-jakarta">Sarah Johnson</h3>
                        <p className="text-darsen-blue dark:text-blue-400 font-medium mb-2 font-inter">Operations Director</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-darsen-gray dark:text-gray-300 font-inter leading-relaxed">Logistics expert with a background in supply chain management and global operations.</p>
                    <div className="mt-6 flex items-center space-x-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-400/10 dark:text-purple-400">
                        <Globe2 className="h-3 w-3 mr-1" />
                        Operations
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-400/10 dark:text-orange-400">
                        <MapPin className="h-3 w-3 mr-1" />
                        Logistics
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group animate-fade-in delay-300">
                <div className="glass dark:glass-dark rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20 dark:border-gray-700/30">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                      alt="Head of Sales" 
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-darsen-black dark:text-white font-jakarta">Michael Wong</h3>
                        <p className="text-darsen-blue dark:text-blue-400 font-medium mb-2 font-inter">Head of Sales</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-darsen-gray dark:text-gray-300 font-inter leading-relaxed">Specialized in building international client relationships and market expansion.</p>
                    <div className="mt-6 flex items-center space-x-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-400/10 dark:text-green-400">
                        <Users className="h-3 w-3 mr-1" />
                        Sales
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-400/10 dark:text-blue-400">
                        <Globe2 className="h-3 w-3 mr-1" />
                        Global
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
