
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <div className="pt-20">
        <div className="bg-darsen-blue text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl opacity-90">
                Get in touch with our team for inquiries, quotes, or support
              </p>
            </div>
          </div>
        </div>
        
        <Contact />
        
        <section className="py-16 bg-darsen-lightGray dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-darsen-black dark:text-white">Find Us</h2>
              <p className="mt-4 text-xl text-darsen-gray dark:text-gray-300">Visit our offices or reach us online</p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm">
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
