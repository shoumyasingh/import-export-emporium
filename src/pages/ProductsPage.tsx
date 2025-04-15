
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HardDrive, Cpu, Smartphone, Apple, Search, Filter } from "lucide-react";

// Sample product data
const products = {
  hardware: [
    { id: 1, name: "Industrial Equipment Set", price: "$1,200.00", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "hardware" },
    { id: 2, name: "Professional Tool Kit", price: "$450.00", image: "https://images.unsplash.com/photo-1581147036308-3bbd0be701e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "hardware" },
    { id: 3, name: "Manufacturing Machinery", price: "$3,500.00", image: "https://images.unsplash.com/photo-1590331063517-c5765f394439?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "hardware" },
    { id: 4, name: "Precision Instruments", price: "$780.00", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "hardware" },
  ],
  software: [
    { id: 5, name: "Business Management Suite", price: "$299.99/year", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "software" },
    { id: 6, name: "Cloud Security Solution", price: "$149.99/month", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "software" },
    { id: 7, name: "Data Analytics Platform", price: "$199.99/month", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "software" },
    { id: 8, name: "Design Software License", price: "$599.99", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "software" },
  ],
  electronics: [
    { id: 9, name: "Smart Home System", price: "$349.99", image: "https://images.unsplash.com/photo-1558002038-1055907dcec1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "electronics" },
    { id: 10, name: "Professional Camera Set", price: "$1,299.99", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "electronics" },
    { id: 11, name: "Audio Equipment Bundle", price: "$799.99", image: "https://images.unsplash.com/photo-1558537294-03eb8c3d07bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "electronics" },
    { id: 12, name: "Computer Components", price: "$599.99", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "electronics" },
  ],
  food: [
    { id: 13, name: "Gourmet Coffee Collection", price: "$89.99", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "food" },
    { id: 14, name: "Imported Chocolate Selection", price: "$49.99", image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "food" },
    { id: 15, name: "Exotic Spice Set", price: "$59.99", image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "food" },
    { id: 16, name: "Premium Olive Oil", price: "$29.99", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "food" },
  ],
};

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("hardware");

  const filteredProducts = products[selectedCategory as keyof typeof products].filter(
    (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-darsen-black">Our Products</h1>
          <p className="mt-4 text-xl text-darsen-gray">Explore our extensive range of import and export products</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="relative w-full md:w-96 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-darsen-blue"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-darsen-gray" />
          </div>
          
          <div className="flex items-center">
            <Filter className="h-5 w-5 text-darsen-gray mr-2" />
            <span className="text-darsen-gray mr-3">Filter by:</span>
            <Tabs defaultValue="hardware" className="w-full md:w-auto" onValueChange={setSelectedCategory}>
              <TabsList>
                <TabsTrigger value="hardware" className="flex items-center">
                  <HardDrive className="h-4 w-4 mr-2" />
                  Hardware
                </TabsTrigger>
                <TabsTrigger value="software" className="flex items-center">
                  <Cpu className="h-4 w-4 mr-2" />
                  Software
                </TabsTrigger>
                <TabsTrigger value="electronics" className="flex items-center">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Electronics
                </TabsTrigger>
                <TabsTrigger value="food" className="flex items-center">
                  <Apple className="h-4 w-4 mr-2" />
                  Food
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-darsen-black">{product.name}</h3>
                <p className="text-darsen-blue font-medium mt-1">{product.price}</p>
                <button className="mt-4 w-full px-4 py-2 bg-darsen-blue text-white rounded-md hover:bg-darsen-darkBlue transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
