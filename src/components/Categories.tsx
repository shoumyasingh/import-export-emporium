
import { Cpu, HardDrive, Smartphone, Apple } from "lucide-react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="py-16 bg-darsen-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darsen-black">Our Product Categories</h2>
          <p className="mt-4 text-xl text-darsen-gray">Explore our diverse range of import and export products</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard 
            title="Hardware" 
            description="Quality machinery, tools, and industrial equipment for businesses worldwide."
            icon={<HardDrive className="h-6 w-6 text-white" />}
            bgColor="bg-darsen-blue"
            textColor="text-white"
          />
          
          <CategoryCard 
            title="Software" 
            description="Cutting-edge software solutions, licenses, and digital products."
            icon={<Cpu className="h-6 w-6 text-darsen-blue" />}
            bgColor="bg-white"
            textColor="text-darsen-black"
          />
          
          <CategoryCard 
            title="Electronics" 
            description="Consumer electronics, components, and technological devices."
            icon={<Smartphone className="h-6 w-6 text-white" />}
            bgColor="bg-darsen-darkBlue"
            textColor="text-white"
          />
          
          <CategoryCard 
            title="Food Items" 
            description="Premium food products, specialty ingredients, and culinary delights."
            icon={<Apple className="h-6 w-6 text-darsen-blue" />}
            bgColor="bg-white"
            textColor="text-darsen-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;
