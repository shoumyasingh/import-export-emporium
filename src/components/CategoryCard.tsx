
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  bgColor: string;
  textColor: string;
}

const CategoryCard = ({ title, description, icon, bgColor, textColor }: CategoryCardProps) => {
  return (
    <div className={`${bgColor} rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer relative`}>
      <div className="p-8 relative z-10">
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10 space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            {icon}
          </div>
          
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold ${textColor} font-jakarta group-hover:scale-105 transition-transform duration-300`}>
              {title}
            </h3>
            <p className={`${textColor} opacity-90 leading-relaxed font-inter text-lg`}>
              {description}
            </p>
          </div>
          
          <div className={`flex items-center ${textColor} font-medium font-inter cursor-pointer group-hover:translate-x-2 transition-all duration-300 pt-4`}>
            <span className="mr-3 text-lg">Learn more</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
