
import { Globe, TrendingUp, Shield, TruckIcon, BarChart, Users } from "lucide-react";

const services = [
  {
    title: "Global Sourcing",
    description: "We source products from trusted manufacturers worldwide to meet your specific requirements.",
    icon: <Globe className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Market Analysis",
    description: "Our experts analyze market trends to help you make informed import/export decisions.",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control ensures all products meet international standards and specifications.",
    icon: <Shield className="h-6 w-6" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Logistics Management",
    description: "Complete shipping and logistics solutions for smooth deliveries across borders.",
    icon: <TruckIcon className="h-6 w-6" />,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Customs Compliance",
    description: "We handle all documentation and ensure compliance with regulations in different countries.",
    icon: <BarChart className="h-6 w-6" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Business Networking",
    description: "Connect with global partners and expand your business through our extensive network.",
    icon: <Users className="h-6 w-6" />,
    color: "from-teal-500 to-blue-500"
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-darsen-black to-darsen-blue bg-clip-text text-transparent">Our Services</h2>
          <p className="mt-4 text-xl text-darsen-gray">Comprehensive import and export solutions for your business</p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-darsen-blue to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-darsen-black mb-3 group-hover:text-darsen-blue transition-colors duration-300">{service.title}</h3>
              <p className="text-darsen-gray leading-relaxed group-hover:text-darsen-black transition-colors duration-300">{service.description}</p>
              
              {/* Hover effect indicator */}
              <div className="mt-4 w-0 h-1 bg-gradient-to-r from-darsen-blue to-purple-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
