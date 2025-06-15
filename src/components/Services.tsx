
import { Globe, TrendingUp, Shield, TruckIcon, BarChart, Users } from "lucide-react";

const services = [
  {
    title: "Global Sourcing",
    description: "We source products from trusted manufacturers worldwide to meet your specific requirements.",
    icon: <Globe className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Market Analysis",
    description: "Our experts analyze market trends to help you make informed import/export decisions.",
    icon: <TrendingUp className="h-8 w-8" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control ensures all products meet international standards and specifications.",
    icon: <Shield className="h-8 w-8" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Logistics Management",
    description: "Complete shipping and logistics solutions for smooth deliveries across borders.",
    icon: <TruckIcon className="h-8 w-8" />,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Customs Compliance",
    description: "We handle all documentation and ensure compliance with regulations in different countries.",
    icon: <BarChart className="h-8 w-8" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Business Networking",
    description: "Connect with global partners and expand your business through our extensive network.",
    icon: <Users className="h-8 w-8" />,
    color: "from-teal-500 to-blue-500"
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass dark:glass-dark text-sm font-medium text-darsen-blue dark:text-blue-400 border border-blue-200/30 dark:border-blue-400/30 mb-8">
            Our Services
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-jakarta mb-6">
            <span className="bg-gradient-to-r from-darsen-black to-darsen-blue dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
              Comprehensive Solutions
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-darsen-gray dark:text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto">
            Complete import and export solutions tailored for your business success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl glass dark:glass-dark border border-gray-200/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 animate-fade-in" 
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-white shadow-lg`}>
                  {service.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-darsen-black dark:text-white font-jakarta group-hover:text-darsen-blue dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-darsen-gray dark:text-gray-300 leading-relaxed font-inter text-lg group-hover:text-darsen-black dark:group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                {/* Hover effect indicator */}
                <div className="w-0 h-1 bg-gradient-to-r from-darsen-blue to-purple-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
