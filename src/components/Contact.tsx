
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
    // Form submission logic would go here
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
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darsen-black">Contact Us</h2>
          <p className="mt-4 text-xl text-darsen-gray">Get in touch with our team for inquiries and quotes</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-darsen-black mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-darsen-gray mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-darsen-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-darsen-gray mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-darsen-blue"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-darsen-gray mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-darsen-blue"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-darsen-gray mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-darsen-blue"
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
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-darsen-gray mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-darsen-blue"
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full sm:w-auto bg-darsen-blue hover:bg-darsen-darkBlue text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-darsen-black mb-6">Contact Information</h3>
            <div className="bg-darsen-lightGray p-6 rounded-lg shadow-sm mb-6">
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-darsen-blue mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-darsen-black">Our Address</h4>
                  <p className="text-darsen-gray">123 Global Trade Center, Business District</p>
                  <p className="text-darsen-gray">New York, NY 10001, USA</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Phone className="h-6 w-6 text-darsen-blue mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-darsen-black">Phone</h4>
                  <p className="text-darsen-gray">+1 (555) 123-4567</p>
                  <p className="text-darsen-gray">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-darsen-blue mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-darsen-black">Email</h4>
                  <p className="text-darsen-gray">info@darsenimportexport.com</p>
                  <p className="text-darsen-gray">sales@darsenimportexport.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-darsen-blue p-6 rounded-lg shadow-sm text-white">
              <h4 className="text-lg font-medium mb-2">Business Hours</h4>
              <div className="grid grid-cols-2 gap-2">
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
