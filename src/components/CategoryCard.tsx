
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
    <div className={`${bgColor} rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105`}>
      <div className="p-6">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className={`text-xl font-bold ${textColor} mb-2`}>{title}</h3>
        <p className={`${textColor} opacity-90 mb-4`}>{description}</p>
        <div className={`flex items-center ${textColor} font-medium cursor-pointer hover:underline`}>
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
