
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Users, Award, MapPin, Clock } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-darsen-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">About Darsen</h1>
            <p className="text-xl opacity-90">
              Your trusted partner for global import and export solutions
            </p>
          </div>
        </div>
      </div>
      
      <About />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-darsen-black">Our Values</h2>
            <p className="mt-4 text-xl text-darsen-gray">The principles that guide our business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-darsen-lightGray p-6 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-darsen-blue text-white flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-darsen-black mb-2">Excellence</h3>
              <p className="text-darsen-gray">We strive for excellence in everything we do, from product quality to customer service.</p>
            </div>
            
            <div className="bg-darsen-lightGray p-6 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-darsen-blue text-white flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-darsen-black mb-2">Partnership</h3>
              <p className="text-darsen-gray">We build long-term partnerships based on mutual trust and shared success.</p>
            </div>
            
            <div className="bg-darsen-lightGray p-6 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-darsen-blue text-white flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-darsen-black mb-2">Global Reach</h3>
              <p className="text-darsen-gray">We leverage our global network to connect businesses across continents.</p>
            </div>
            
            <div className="bg-darsen-lightGray p-6 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-darsen-blue text-white flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-darsen-black mb-2">Reliability</h3>
              <p className="text-darsen-gray">We deliver on our promises, ensuring timely and dependable service.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-darsen-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-darsen-black">Our Team</h2>
            <p className="mt-4 text-xl text-darsen-gray">Meet the experts behind Darsen</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="CEO" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-darsen-black">John Smith</h3>
                <p className="text-darsen-blue font-medium mb-2">CEO & Founder</p>
                <p className="text-darsen-gray">Over 20 years of experience in international trade and business development.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Operations Director" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-darsen-black">Sarah Johnson</h3>
                <p className="text-darsen-blue font-medium mb-2">Operations Director</p>
                <p className="text-darsen-gray">Logistics expert with a background in supply chain management and global operations.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Head of Sales" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-darsen-black">Michael Wong</h3>
                <p className="text-darsen-blue font-medium mb-2">Head of Sales</p>
                <p className="text-darsen-gray">Specialized in building international client relationships and market expansion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
