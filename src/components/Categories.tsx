
import { Cpu, HardDrive, Smartphone, Apple } from "lucide-react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-darsen-lightGray to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-darsen-blue/10 to-purple-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-bl from-cyan-400/10 to-darsen-blue/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-darsen-black to-darsen-blue dark:from-white dark:to-blue-400 bg-clip-text text-transparent">Our Product Categories</h2>
          <p className="mt-4 text-xl text-darsen-gray dark:text-gray-300">Explore our diverse range of import and export products</p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-darsen-blue to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="animate-fade-in delay-100">
            <CategoryCard 
              title="Hardware" 
              description="Quality machinery, tools, and industrial equipment for businesses worldwide."
              icon={<HardDrive className="h-6 w-6 text-white" />}
              bgColor="bg-gradient-to-br from-darsen-blue to-darsen-darkBlue"
              textColor="text-white"
            />
          </div>
          
          <div className="animate-fade-in delay-200">
            <CategoryCard 
              title="Software" 
              description="Cutting-edge software solutions, licenses, and digital products."
              icon={<Cpu className="h-6 w-6 text-darsen-blue dark:text-blue-400" />}
              bgColor="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 border border-blue-200 dark:border-gray-600"
              textColor="text-darsen-black dark:text-white"
            />
          </div>
          
          <div className="animate-fade-in delay-300">
            <CategoryCard 
              title="Electronics" 
              description="Consumer electronics, components, and technological devices."
              icon={<Smartphone className="h-6 w-6 text-white" />}
              bgColor="bg-gradient-to-br from-purple-600 to-darsen-darkBlue"
              textColor="text-white"
            />
          </div>
          
          <div className="animate-fade-in delay-400">
            <CategoryCard 
              title="Food Items" 
              description="Premium food products, specialty ingredients, and culinary delights."
              icon={<Apple className="h-6 w-6 text-darsen-blue dark:text-blue-400" />}
              bgColor="bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-gray-700 border border-green-200 dark:border-gray-600"
              textColor="text-darsen-black dark:text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
