
import { Globe, TrendingUp, Shield, TruckIcon, BarChart, Users } from "lucide-react";

const services = [
  {
    title: "Global Sourcing",
    description: "We source products from trusted manufacturers worldwide to meet your specific requirements.",
    icon: <Globe className="h-6 w-6 text-darsen-blue" />,
  },
  {
    title: "Market Analysis",
    description: "Our experts analyze market trends to help you make informed import/export decisions.",
    icon: <TrendingUp className="h-6 w-6 text-darsen-blue" />,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control ensures all products meet international standards and specifications.",
    icon: <Shield className="h-6 w-6 text-darsen-blue" />,
  },
  {
    title: "Logistics Management",
    description: "Complete shipping and logistics solutions for smooth deliveries across borders.",
    icon: <TruckIcon className="h-6 w-6 text-darsen-blue" />,
  },
  {
    title: "Customs Compliance",
    description: "We handle all documentation and ensure compliance with regulations in different countries.",
    icon: <BarChart className="h-6 w-6 text-darsen-blue" />,
  },
  {
    title: "Business Networking",
    description: "Connect with global partners and expand your business through our extensive network.",
    icon: <Users className="h-6 w-6 text-darsen-blue" />,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darsen-black">Our Services</h2>
          <p className="mt-4 text-xl text-darsen-gray">Comprehensive import and export solutions for your business</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-darsen-lightGray flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-darsen-black mb-2">{service.title}</h3>
              <p className="text-darsen-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
