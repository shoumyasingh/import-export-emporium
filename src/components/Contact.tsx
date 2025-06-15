
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass dark:glass-dark text-sm font-medium text-darsen-blue dark:text-blue-400 border border-blue-200/30 dark:border-blue-400/30 mb-8">
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-jakarta mb-6">
            <span className="bg-gradient-to-r from-darsen-black to-darsen-blue dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-darsen-gray dark:text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto">
            Ready to start your global trade journey? Let's connect and discuss your requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-darsen-black dark:text-white font-jakarta mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-darsen-gray dark:text-gray-300 mb-2 font-inter">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 glass dark:glass-dark border border-gray-300/30 dark:border-gray-600/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-darsen-blue dark:focus:ring-blue-400 transition-all duration-300 font-inter"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-darsen-gray dark:text-gray-300 mb-2 font-inter">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 glass dark:glass-dark border border-gray-300/30 dark:border-gray-600/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-darsen-blue dark:focus:ring-blue-400 transition-all duration-300 font-inter"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-darsen-gray dark:text-gray-300 mb-2 font-inter">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 glass dark:glass-dark border border-gray-300/30 dark:border-gray-600/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-darsen-blue dark:focus:ring-blue-400 transition-all duration-300 font-inter"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-darsen-gray dark:text-gray-300 mb-2 font-inter">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 glass dark:glass-dark border border-gray-300/30 dark:border-gray-600/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-darsen-blue dark:focus:ring-blue-400 transition-all duration-300 font-inter"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Information">Product Information</option>
                    <option value="Quote Request">Quote Request</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-darsen-gray dark:text-gray-300 mb-2 font-inter">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-4 glass dark:glass-dark border border-gray-300/30 dark:border-gray-600/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-darsen-blue dark:focus:ring-blue-400 transition-all duration-300 font-inter resize-none"
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full sm:w-auto bg-gradient-to-r from-darsen-blue to-darsen-darkBlue hover:from-darsen-darkBlue hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold font-inter rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="animate-fade-in delay-200">
            <h3 className="text-3xl font-bold text-darsen-black dark:text-white font-jakarta mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="p-8 glass dark:glass-dark rounded-3xl border border-gray-200/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-darsen-blue to-purple-600 rounded-2xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-darsen-black dark:text-white font-jakarta mb-2">Our Address</h4>
                    <p className="text-darsen-gray dark:text-gray-300 font-inter">A/701, Ajanta Empress, Sector – 19, Airoli</p>
                    <p className="text-darsen-gray dark:text-gray-300 font-inter">Navi Mumbai, 400708, Maharashtra, India</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 glass dark:glass-dark rounded-3xl border border-gray-200/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-darsen-blue to-purple-600 rounded-2xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-darsen-black dark:text-white font-jakarta mb-2">Phone</h4>
                    <p className="text-darsen-gray dark:text-gray-300 font-inter">+91 9821841769</p>
                    <p className="text-darsen-gray dark:text-gray-300 font-inter">+91 9082511136</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 glass dark:glass-dark rounded-3xl border border-gray-200/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-darsen-blue to-purple-600 rounded-2xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-darsen-black dark:text-white font-jakarta mb-2">Email</h4>
                    <p className="text-darsen-gray dark:text-gray-300 font-inter">darsenenterprises@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-8 bg-gradient-to-r from-darsen-blue to-darsen-darkBlue rounded-3xl shadow-xl text-white">
              <h4 className="text-xl font-semibold mb-4 font-jakarta">Business Hours</h4>
              <div className="grid grid-cols-2 gap-4 font-inter">
                <div>
                  <p className="font-medium">Monday - Friday:</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Saturday:</p>
                  <p>10:00 AM - 2:00 PM</p>
                </div>
                <div className="col-span-2">
                  <p className="font-medium">Sunday:</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
