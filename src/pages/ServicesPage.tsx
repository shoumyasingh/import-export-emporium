
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-darsen-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive import and export solutions tailored to your business needs
            </p>
            <Button className="bg-white text-darsen-blue hover:bg-gray-100">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
      
      <Services />
      
      <section className="py-16 bg-darsen-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-darsen-black">How We Work</h2>
            <p className="mt-4 text-xl text-darsen-gray">Our streamlined process for successful global trade</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="w-12 h-12 rounded-full bg-darsen-blue text-white flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-darsen-black mb-2">Consultation</h3>
              <p className="text-darsen-gray">We understand your specific needs and requirements.</p>
              <ArrowRight className="absolute top-1/2 -right-4 h-8 w-8 text-darsen-blue hidden md:block" />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="w-12 h-12 rounded-full bg-darsen-blue text-white flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-darsen-black mb-2">Planning</h3>
              <p className="text-darsen-gray">We create a tailored strategy for your import/export needs.</p>
              <ArrowRight className="absolute top-1/2 -right-4 h-8 w-8 text-darsen-blue hidden md:block" />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="w-12 h-12 rounded-full bg-darsen-blue text-white flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-darsen-black mb-2">Execution</h3>
              <p className="text-darsen-gray">We handle all logistics, documentation, and compliance.</p>
              <ArrowRight className="absolute top-1/2 -right-4 h-8 w-8 text-darsen-blue hidden md:block" />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-darsen-blue text-white flex items-center justify-center font-bold text-lg mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-darsen-black mb-2">Delivery</h3>
              <p className="text-darsen-gray">We ensure on-time delivery and complete customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-darsen-blue to-darsen-darkBlue rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <div className="flex items-center mb-6">
                <Sparkles className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">Need a Customized Solution?</h3>
              </div>
              <p className="text-lg opacity-90 mb-8 max-w-3xl">
                Our team of experts can create a tailored import/export solution 
                specific to your business requirements. Contact us today for a 
                personalized consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-darsen-blue hover:bg-gray-100">
                  Contact Our Team
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  View Success Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
