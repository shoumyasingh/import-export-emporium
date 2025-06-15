
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
    <div className={`${bgColor} rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer`}>
      <div className="p-6 relative">
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className={`text-xl font-bold ${textColor} mb-3 group-hover:scale-105 transition-transform duration-300`}>{title}</h3>
          <p className={`${textColor} opacity-90 mb-4 leading-relaxed`}>{description}</p>
          <div className={`flex items-center ${textColor} font-medium cursor-pointer group-hover:translate-x-2 transition-transform duration-300`}>
            <span className="mr-2">Learn more</span>
            <ArrowRight className="h-4 w-4 group-hover:animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
