
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Globe, Users } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: <CheckCircle className="h-6 w-6" />, text: "ISO 9001:2015 Certified" },
    { icon: <Award className="h-6 w-6" />, text: "Best Export Company 2023" },
    { icon: <Globe className="h-6 w-6" />, text: "Global Trade Excellence" },
    { icon: <Users className="h-6 w-6" />, text: "Trusted by 1000+ Clients" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-darsen-blue/5 to-purple-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-cyan-400/5 to-darsen-blue/5 rounded-full blur-3xl animate-float delay-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass dark:glass-dark text-sm font-medium text-darsen-blue dark:text-blue-400 border border-blue-200/30 dark:border-blue-400/30">
                About Darsen
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold font-jakarta">
                <span className="bg-gradient-to-r from-darsen-black to-darsen-blue dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                  Leading Global Trade
                </span>
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl text-darsen-gray dark:text-gray-300 font-inter leading-relaxed">
                <p>
                  Darsen is a leading import-export company with years of experience in global trade. We specialize in <span className="font-semibold text-darsen-blue dark:text-blue-400">hardware, software, electronics,</span> and premium food products.
                </p>
                <p>
                  Our mission is to simplify international trade by providing reliable, efficient, and cost-effective solutions that connect businesses worldwide with quality merchandise.
                </p>
              </div>
            </div>
            
            {/* Achievement badges */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 text-darsen-blue dark:text-blue-400 glass dark:glass-dark p-4 rounded-2xl border border-blue-200/30 dark:border-blue-400/30 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  {achievement.icon}
                  <span className="text-sm font-medium font-inter">{achievement.text}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl glass dark:glass-dark border border-blue-200/30 dark:border-blue-400/30 group hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h4 className="font-bold text-darsen-blue dark:text-blue-400 text-4xl mb-3 font-jakarta group-hover:scale-110 transition-transform duration-300">15+</h4>
                <p className="text-darsen-gray dark:text-gray-300 font-inter font-medium">Years of Experience</p>
              </div>
              <div className="p-8 rounded-3xl glass dark:glass-dark border border-blue-200/30 dark:border-blue-400/30 group hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h4 className="font-bold text-darsen-blue dark:text-blue-400 text-4xl mb-3 font-jakarta group-hover:scale-110 transition-transform duration-300">50+</h4>
                <p className="text-darsen-gray dark:text-gray-300 font-inter font-medium">Countries Served</p>
              </div>
              <div className="p-8 rounded-3xl glass dark:glass-dark border border-blue-200/30 dark:border-blue-400/30 group hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h4 className="font-bold text-darsen-blue dark:text-blue-400 text-4xl mb-3 font-jakarta group-hover:scale-110 transition-transform duration-300">1000+</h4>
                <p className="text-darsen-gray dark:text-gray-300 font-inter font-medium">Satisfied Clients</p>
              </div>
              <div className="p-8 rounded-3xl glass dark:glass-dark border border-blue-200/30 dark:border-blue-400/30 group hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h4 className="font-bold text-darsen-blue dark:text-blue-400 text-4xl mb-3 font-jakarta group-hover:scale-110 transition-transform duration-300">5000+</h4>
                <p className="text-darsen-gray dark:text-gray-300 font-inter font-medium">Products Delivered</p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-darsen-blue to-darsen-darkBlue hover:from-darsen-darkBlue hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl px-8 py-4 text-lg font-semibold font-inter rounded-2xl">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Darsen Global Operations" 
                className="rounded-3xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darsen-blue/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 glass dark:glass-dark border border-white/30 dark:border-gray-700/30 text-white p-8 rounded-3xl shadow-2xl max-w-sm hidden md:block transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <p className="font-medium text-lg font-inter leading-relaxed">
                    "Darsen has transformed our supply chain with their efficient import services and excellent customer support."
                  </p>
                  <p className="mt-4 font-bold text-sm text-blue-200 font-inter">- John Smith, CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
