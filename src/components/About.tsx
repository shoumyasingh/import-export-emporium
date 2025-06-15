
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Globe, Users } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: <CheckCircle className="h-5 w-5" />, text: "ISO 9001:2015 Certified" },
    { icon: <Award className="h-5 w-5" />, text: "Best Export Company 2023" },
    { icon: <Globe className="h-5 w-5" />, text: "Global Trade Excellence" },
    { icon: <Users className="h-5 w-5" />, text: "Trusted by 1000+ Clients" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-darsen-lightGray via-blue-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-darsen-blue/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-cyan-400/5 to-darsen-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-darsen-black to-darsen-blue bg-clip-text text-transparent mb-6">About Darsen</h2>
            <p className="text-lg text-darsen-gray mb-4 leading-relaxed">
              Darsen is a leading import-export company with years of experience in global trade. We specialize in hardware, software, electronics, and premium food products, connecting businesses worldwide with quality merchandise.
            </p>
            <p className="text-lg text-darsen-gray mb-6 leading-relaxed">
              Our mission is to simplify international trade by providing reliable, efficient, and cost-effective import-export solutions. We handle everything from sourcing and logistics to customs clearance and delivery.
            </p>
            
            {/* Achievement badges */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2 text-darsen-blue bg-white/60 backdrop-blur-sm p-3 rounded-lg border border-blue-200/50 hover:shadow-md transition-all duration-300">
                  {achievement.icon}
                  <span className="text-sm font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 group hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-darsen-blue text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">15+</h4>
                <p className="text-darsen-gray">Years of Experience</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 group hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-darsen-blue text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">50+</h4>
                <p className="text-darsen-gray">Countries Served</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 group hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-darsen-blue text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">1000+</h4>
                <p className="text-darsen-gray">Satisfied Clients</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 group hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-darsen-blue text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">5000+</h4>
                <p className="text-darsen-gray">Products Delivered</p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-darsen-blue to-darsen-darkBlue hover:from-darsen-darkBlue hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Darsen Global Operations" 
                className="rounded-2xl transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darsen-blue/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-darsen-blue to-purple-600 text-white p-6 rounded-2xl shadow-2xl max-w-xs hidden md:block transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <p className="font-medium text-lg leading-relaxed">
                    "Darsen has transformed our supply chain with their efficient import services and excellent customer support."
                  </p>
                  <p className="mt-3 font-bold text-sm">- John Smith, CEO</p>
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
