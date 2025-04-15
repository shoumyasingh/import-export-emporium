
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-16 bg-darsen-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-darsen-black mb-6">About Darsen</h2>
            <p className="text-lg text-darsen-gray mb-4">
              Darsen is a leading import-export company with years of experience in global trade. We specialize in hardware, software, electronics, and premium food products, connecting businesses worldwide with quality merchandise.
            </p>
            <p className="text-lg text-darsen-gray mb-6">
              Our mission is to simplify international trade by providing reliable, efficient, and cost-effective import-export solutions. We handle everything from sourcing and logistics to customs clearance and delivery.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-darsen-blue text-2xl mb-1">15+</h4>
                <p className="text-darsen-gray">Years of Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-darsen-blue text-2xl mb-1">50+</h4>
                <p className="text-darsen-gray">Countries Served</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-darsen-blue text-2xl mb-1">1000+</h4>
                <p className="text-darsen-gray">Satisfied Clients</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-darsen-blue text-2xl mb-1">5000+</h4>
                <p className="text-darsen-gray">Products Delivered</p>
              </div>
            </div>
            
            <Button className="bg-darsen-blue hover:bg-darsen-darkBlue text-white">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
              alt="Darsen Global Operations" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-darsen-blue text-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
              <p className="font-medium text-lg">
                "Darsen has transformed our supply chain with their efficient import services and excellent customer support."
              </p>
              <p className="mt-2 font-bold">- John Smith, CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
