
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Phone, Mail, MapPin, Clock, Globe2, MessageSquare } from "lucide-react";

const ContactPage = () => {
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
                <MessageSquare className="h-4 w-4 mr-2" />
                Get in Touch
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-jakarta bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-inter max-w-3xl">
                Get in touch with our team for inquiries, quotes, or support. We're here to help you succeed in global trade.
              </p>
            </div>
          </div>
        </div>
        
        {/* Enhanced Contact Info Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-darsen-blue/5 to-purple-400/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-cyan-400/5 to-darsen-blue/5 rounded-full blur-3xl animate-float delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass dark:glass-dark text-sm font-medium text-darsen-blue dark:text-blue-400 border border-blue-200/30 dark:border-blue-400/30 mb-6">
                <Globe2 className="h-4 w-4 mr-2" />
                Contact Information
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-jakarta bg-gradient-to-r from-darsen-black to-darsen-blue dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-6">
                Reach Out to Us
              </h2>
              <p className="mt-4 text-xl md:text-2xl text-darsen-gray dark:text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
                Multiple ways to connect with our global team
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="group animate-fade-in delay-100">
                <div className="glass dark:glass-dark p-8 rounded-3xl text-center border border-blue-200/30 dark:border-blue-400/30 hover:shadow-2xl hover:border-blue-300/50 dark:hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-darsen-blue to-purple-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-darsen-black dark:text-white mb-4 font-jakarta">Phone</h3>
                  <p className="text-darsen-gray dark:text-gray-300 font-inter leading-relaxed">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="group animate-fade-in delay-200">
                <div className="glass dark:glass-dark p-8 rounded-3xl text-center border border-blue-200/30 dark:border-blue-400/30 hover:shadow-2xl hover:border-blue-300/50 dark:hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-darsen-black dark:text-white mb-4 font-jakarta">Email</h3>
                  <p className="text-darsen-gray dark:text-gray-300 font-inter leading-relaxed">darsenenterprises@gmail.com</p>
                </div>
              </div>
              
              <div className="group animate-fade-in delay-300">
                <div className="glass dark:glass-dark p-8 rounded-3xl text-center border border-blue-200/30 dark:border-blue-400/30 hover:shadow-2xl hover:border-blue-300/50 dark:hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-darsen-black dark:text-white mb-4 font-jakarta">Address</h3>
                  <p className="text-darsen-gray dark:text-gray-300 font-inter leading-relaxed">123 Global Trade Center<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="group animate-fade-in delay-400">
                <div className="glass dark:glass-dark p-8 rounded-3xl text-center border border-blue-200/30 dark:border-blue-400/30 hover:shadow-2xl hover:border-blue-300/50 dark:hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 text-white flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-darsen-black dark:text-white mb-4 font-jakarta">Hours</h3>
                  <p className="text-darsen-gray dark:text-gray-300 font-inter leading-relaxed">Mon-Fri: 9AM-6PM<br />Sat-Sun: 10AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Contact />
        
        {/* Enhanced Map Section */}
        <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass dark:glass-dark text-sm font-medium text-darsen-blue dark:text-blue-400 border border-blue-200/30 dark:border-blue-400/30 mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                Find Us
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-jakarta bg-gradient-to-r from-darsen-black to-darsen-blue dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-6">
                Visit Our Office
              </h2>
              <p className="mt-4 text-xl md:text-2xl text-darsen-gray dark:text-gray-300 font-inter max-w-3xl mx-auto leading-relaxed">
                Located in the heart of the global trade district
              </p>
            </div>
            
            <div className="glass dark:glass-dark rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/30 animate-fade-in delay-200">
              <div className="h-96 w-full">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Map Location" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
