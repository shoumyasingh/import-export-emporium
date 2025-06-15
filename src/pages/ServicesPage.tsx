
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Sparkles, ArrowRight, CheckCircle, Globe, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-20">
        <div className="relative overflow-hidden bg-gradient-to-r from-darsen-blue via-darsen-darkBlue to-purple-900 text-white py-24">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300/20 rounded-full animate-float delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-300/20 rounded-full animate-float delay-500"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-white/20 text-sm font-medium text-white/90 mb-8 animate-fade-in">
                <Sparkles className="h-4 w-4 mr-2" />
                Comprehensive Solutions
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold font-jakarta mb-6 animate-fade-in delay-200">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl opacity-90 mb-12 leading-relaxed font-inter animate-fade-in delay-300">
                Comprehensive import and export solutions tailored to your business needs. 
                We provide end-to-end services to make global trade seamless and profitable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-500">
                <Button className="bg-white text-darsen-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Request a Quote
                </Button>
                <Button variant="outline" className="text-white border-white/30 hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-darsen-black dark:text-white mb-2">50+</div>
                <div className="text-darsen-gray dark:text-gray-300">Countries Served</div>
              </div>
              
              <div className="text-center group animate-fade-in delay-100">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-darsen-black dark:text-white mb-2">98%</div>
                <div className="text-darsen-gray dark:text-gray-300">Success Rate</div>
              </div>
              
              <div className="text-center group animate-fade-in delay-200">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-darsen-black dark:text-white mb-2">1000+</div>
                <div className="text-darsen-gray dark:text-gray-300">Satisfied Clients</div>
              </div>
              
              <div className="text-center group animate-fade-in delay-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-darsen-black dark:text-white mb-2">24/7</div>
                <div className="text-darsen-gray dark:text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Component */}
        <Services />
        
        {/* Process Section */}
        <section className="py-24 bg-gradient-to-br from-darsen-lightGray/50 to-blue-50/30 dark:from-gray-800/50 dark:to-gray-700/30 backdrop-blur-sm relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-20 w-40 h-40 bg-darsen-blue rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20 animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass dark:glass-dark text-sm font-medium text-darsen-blue dark:text-blue-400 border border-blue-200/30 dark:border-blue-400/30 mb-8">
                Our Process
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold font-jakarta mb-6">
                <span className="bg-gradient-to-r from-darsen-black to-darsen-blue dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                  How We Work
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-darsen-gray dark:text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto">
                Our streamlined process ensures successful global trade partnerships
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="group animate-fade-in">
                <div className="glass dark:glass-dark p-8 rounded-3xl border border-gray-200/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-darsen-black dark:text-white mb-4 font-jakarta">Consultation</h3>
                    <p className="text-darsen-gray dark:text-gray-300 leading-relaxed font-inter">We understand your specific needs and requirements through detailed discussions.</p>
                    
                    {/* Hover indicator */}
                    <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500 rounded-full mt-6"></div>
                  </div>
                </div>
                
                <div className="hidden md:flex justify-center mt-4">
                  <ArrowRight className="h-8 w-8 text-darsen-blue animate-pulse" />
                </div>
              </div>
              
              <div className="group animate-fade-in delay-100">
                <div className="glass dark:glass-dark p-8 rounded-3xl border border-gray-200/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-darsen-black dark:text-white mb-4 font-jakarta">Planning</h3>
                    <p className="text-darsen-gray dark:text-gray-300 leading-relaxed font-inter">We create a tailored strategy for your import/export needs with detailed timelines.</p>
                    
                    <div className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 rounded-full mt-6"></div>
                  </div>
                </div>
                
                <div className="hidden md:flex justify-center mt-4">
                  <ArrowRight className="h-8 w-8 text-darsen-blue animate-pulse" />
                </div>
              </div>
              
              <div className="group animate-fade-in delay-200">
                <div className="glass dark:glass-dark p-8 rounded-3xl border border-gray-200/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center font-bold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-darsen-black dark:text-white mb-4 font-jakarta">Execution</h3>
                    <p className="text-darsen-gray dark:text-gray-300 leading-relaxed font-inter">We handle all logistics, documentation, and compliance requirements seamlessly.</p>
                    
                    <div className="w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-500 rounded-full mt-6"></div>
                  </div>
                </div>
                
                <div className="hidden md:flex justify-center mt-4">
                  <ArrowRight className="h-8 w-8 text-darsen-blue animate-pulse" />
                </div>
              </div>
              
              <div className="group animate-fade-in delay-300">
                <div className="glass dark:glass-dark p-8 rounded-3xl border border-gray-200/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center font-bold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      4
                    </div>
                    <h3 className="text-2xl font-bold text-darsen-black dark:text-white mb-4 font-jakarta">Delivery</h3>
                    <p className="text-darsen-gray dark:text-gray-300 leading-relaxed font-inter">We ensure on-time delivery and complete customer satisfaction with ongoing support.</p>
                    
                    <div className="w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-500 rounded-full mt-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="glass dark:glass-dark rounded-3xl shadow-2xl overflow-hidden border border-gray-200/30 dark:border-gray-700/30 animate-fade-in">
              <div className="bg-gradient-to-r from-darsen-blue via-darsen-darkBlue to-purple-900 p-12 md:p-16 text-white relative">
                {/* Floating elements */}
                <div className="absolute top-8 right-8 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-blue-300/20 rounded-full animate-float delay-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <Sparkles className="h-10 w-10 mr-4 animate-glow" />
                    <h3 className="text-3xl md:text-4xl font-bold font-jakarta">Need a Customized Solution?</h3>
                  </div>
                  
                  <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl leading-relaxed font-inter">
                    Our team of experts can create a tailored import/export solution 
                    specific to your business requirements. Contact us today for a 
                    personalized consultation and discover how we can transform your global trade operations.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Button className="bg-white text-darsen-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <Sparkles className="h-5 w-5 mr-2" />
                      Contact Our Team
                    </Button>
                    <Button variant="outline" className="text-white border-white/30 hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      View Success Stories
                    </Button>
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

export default ServicesPage;
