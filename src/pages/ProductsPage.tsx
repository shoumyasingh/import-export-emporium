
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HardDrive, Cpu, Smartphone, Apple, Search, Filter, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample product data
const products = {
  hardware: [
    { id: 1, name: "Industrial Equipment Set", price: "$1,200.00", originalPrice: "$1,500.00", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "hardware", rating: 4.8, reviews: 124 },
    { id: 2, name: "Professional Tool Kit", price: "$450.00", originalPrice: "$580.00", image: "https://images.unsplash.com/photo-1581147036308-3bbd0be701e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "hardware", rating: 4.9, reviews: 89 },
    { id: 3, name: "Manufacturing Machinery", price: "$3,500.00", originalPrice: "$4,200.00", image: "https://images.unsplash.com/photo-1590331063517-c5765f394439?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "hardware", rating: 4.7, reviews: 67 },
    { id: 4, name: "Precision Instruments", price: "$780.00", originalPrice: "$950.00", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "hardware", rating: 4.6, reviews: 203 },
  ],
  software: [
    { id: 5, name: "Business Management Suite", price: "$299.99/year", originalPrice: "$399.99/year", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "software", rating: 4.9, reviews: 156 },
    { id: 6, name: "Cloud Security Solution", price: "$149.99/month", originalPrice: "$199.99/month", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "software", rating: 4.8, reviews: 298 },
    { id: 7, name: "Data Analytics Platform", price: "$199.99/month", originalPrice: "$249.99/month", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "software", rating: 4.7, reviews: 187 },
    { id: 8, name: "Design Software License", price: "$599.99", originalPrice: "$799.99", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "software", rating: 4.9, reviews: 342 },
  ],
  electronics: [
    { id: 9, name: "Smart Home System", price: "$349.99", originalPrice: "$449.99", image: "https://images.unsplash.com/photo-1558002038-1055907dcec1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "electronics", rating: 4.6, reviews: 234 },
    { id: 10, name: "Professional Camera Set", price: "$1,299.99", originalPrice: "$1,599.99", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "electronics", rating: 4.8, reviews: 167 },
    { id: 11, name: "Audio Equipment Bundle", price: "$799.99", originalPrice: "$999.99", image: "https://images.unsplash.com/photo-1558537294-03eb8c3d07bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "electronics", rating: 4.7, reviews: 123 },
    { id: 12, name: "Computer Components", price: "$599.99", originalPrice: "$749.99", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "electronics", rating: 4.9, reviews: 289 },
  ],
  food: [
    { id: 13, name: "Gourmet Coffee Collection", price: "$89.99", originalPrice: "$119.99", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "food", rating: 4.8, reviews: 456 },
    { id: 14, name: "Imported Chocolate Selection", price: "$49.99", originalPrice: "$69.99", image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "food", rating: 4.9, reviews: 234 },
    { id: 15, name: "Exotic Spice Set", price: "$59.99", originalPrice: "$79.99", image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "food", rating: 4.7, reviews: 167 },
    { id: 16, name: "Premium Olive Oil", price: "$29.99", originalPrice: "$39.99", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", category: "food", rating: 4.6, reviews: 89 },
  ],
};

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("hardware");

  const filteredProducts = products[selectedCategory as keyof typeof products].filter(
    (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-darsen-blue/10 to-purple-600/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 rounded-full glass dark:glass-dark text-sm font-medium text-darsen-blue dark:text-blue-400 border border-blue-200/30 dark:border-blue-400/30 mb-8">
                Premium Products
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold font-jakarta mb-6">
                <span className="bg-gradient-to-r from-darsen-black to-darsen-blue dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                  Our Products
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-darsen-gray dark:text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto mb-12">
                Explore our extensive range of premium import and export products
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96 animate-fade-in">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-6 py-4 pl-14 rounded-2xl glass dark:glass-dark border border-white/20 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-darsen-blue/50 focus:border-darsen-blue transition-all duration-300 text-lg font-inter"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-darsen-gray dark:text-gray-400" />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center animate-fade-in delay-200">
                <Filter className="h-5 w-5 text-darsen-gray dark:text-gray-400 mr-3" />
                <span className="text-darsen-gray dark:text-gray-300 mr-4 font-inter">Filter by:</span>
                <Tabs defaultValue="hardware" className="w-full lg:w-auto" onValueChange={setSelectedCategory}>
                  <TabsList className="glass dark:glass-dark border border-white/20 dark:border-gray-700/50 p-1">
                    <TabsTrigger value="hardware" className="flex items-center gap-2 font-inter">
                      <HardDrive className="h-4 w-4" />
                      Hardware
                    </TabsTrigger>
                    <TabsTrigger value="software" className="flex items-center gap-2 font-inter">
                      <Cpu className="h-4 w-4" />
                      Software
                    </TabsTrigger>
                    <TabsTrigger value="electronics" className="flex items-center gap-2 font-inter">
                      <Smartphone className="h-4 w-4" />
                      Electronics
                    </TabsTrigger>
                    <TabsTrigger value="food" className="flex items-center gap-2 font-inter">
                      <Apple className="h-4 w-4" />
                      Food
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 animate-fade-in"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Discount Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Save 20%
                    </div>
                    {/* Favorite Button */}
                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full glass text-white/80 hover:text-red-400 transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Product Details */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-darsen-black dark:text-white font-jakarta group-hover:text-darsen-blue dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {renderStars(product.rating)}
                        </div>
                        <span className="text-sm text-darsen-gray dark:text-gray-400 font-inter">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-darsen-blue dark:text-blue-400 font-inter">
                        {product.price}
                      </span>
                      <span className="text-sm text-darsen-gray dark:text-gray-500 line-through font-inter">
                        {product.originalPrice}
                      </span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      <Button className="flex-1 bg-gradient-to-r from-darsen-blue to-darsen-darkBlue hover:from-darsen-darkBlue hover:to-purple-700 text-white font-medium font-inter transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" className="px-4 glass dark:glass-dark border border-darsen-blue/30 text-darsen-blue dark:text-blue-400 hover:bg-darsen-blue/10 transition-all duration-300">
                        Quote
                      </Button>
                    </div>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darsen-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
            
            {/* No Products Found */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16 animate-fade-in">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-darsen-blue/20 to-purple-600/20 flex items-center justify-center">
                  <Search className="h-12 w-12 text-darsen-gray dark:text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-darsen-black dark:text-white font-jakarta mb-2">
                  No products found
                </h3>
                <p className="text-darsen-gray dark:text-gray-400 font-inter">
                  Try adjusting your search terms or browse other categories
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-darsen-blue to-darsen-darkBlue relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center text-white animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold font-jakarta mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl opacity-90 mb-8 font-inter max-w-2xl mx-auto">
                Our team can source custom products tailored to your specific requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-darsen-blue hover:bg-gray-100 font-medium font-inter px-8 py-3 transform hover:scale-105 transition-all duration-300">
                  Request Custom Quote
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10 font-medium font-inter px-8 py-3">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
