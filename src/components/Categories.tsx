
import { Cpu, HardDrive, Smartphone, Apple } from "lucide-react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-20 w-64 h-64 bg-gradient-to-br from-darsen-blue/5 to-purple-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-bl from-cyan-400/5 to-darsen-blue/5 rounded-full blur-3xl animate-float delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass dark:glass-dark text-sm font-medium text-darsen-blue dark:text-blue-400 border border-blue-200/30 dark:border-blue-400/30 mb-8">
            Our Categories
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-jakarta mb-6">
            <span className="bg-gradient-to-r from-darsen-black to-darsen-blue dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
              Product Categories
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-darsen-gray dark:text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto">
            Explore our diverse range of import and export products across multiple industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in delay-100">
            <CategoryCard 
              title="Hardware" 
              description="Quality machinery, tools, and industrial equipment for businesses worldwide."
              icon={<HardDrive className="h-8 w-8 text-white" />}
              bgColor="bg-gradient-to-br from-darsen-blue to-darsen-darkBlue"
              textColor="text-white"
            />
          </div>
          
          <div className="animate-fade-in delay-200">
            <CategoryCard 
              title="Software" 
              description="Cutting-edge software solutions, licenses, and digital products."
              icon={<Cpu className="h-8 w-8 text-darsen-blue dark:text-blue-400" />}
              bgColor="glass dark:glass-dark border border-blue-200/30 dark:border-blue-400/30"
              textColor="text-darsen-black dark:text-white"
            />
          </div>
          
          <div className="animate-fade-in delay-300">
            <CategoryCard 
              title="Electronics" 
              description="Consumer electronics, components, and technological devices."
              icon={<Smartphone className="h-8 w-8 text-white" />}
              bgColor="bg-gradient-to-br from-purple-600 to-darsen-darkBlue"
              textColor="text-white"
            />
          </div>
          
          <div className="animate-fade-in delay-400">
            <CategoryCard 
              title="Food Items" 
              description="Premium food products, specialty ingredients, and culinary delights."
              icon={<Apple className="h-8 w-8 text-darsen-blue dark:text-blue-400" />}
              bgColor="glass dark:glass-dark border border-green-200/30 dark:border-green-400/30"
              textColor="text-darsen-black dark:text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
