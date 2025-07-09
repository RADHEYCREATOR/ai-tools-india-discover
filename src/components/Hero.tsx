import { useState, useEffect, useCallback } from 'react';
import { Search } from 'lucide-react';
import heroImg from '../assets/hero-bg.jpg';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce search input by 300ms
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality with debounced query
    console.log('Searching for:', debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div className="relative bg-gradient-to-br from-primary to-primary-dark min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImg} 
          alt="AI Tools Background" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 gradient-hero-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Discover the Best{' '}
          <span className="text-accent">Free AI Tools</span>{' '}
          in India
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-8 animate-slide-up">
          Curated & categorized for students, creators & professionals
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto animate-scale-in">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent shadow-xl"
                aria-label="Search AI tools"
              />
            </div>
            <button
              type="submit"
              className="absolute right-2 top-2 bg-primary text-white px-6 py-2 rounded-xl hover:bg-primary-dark transition-colors duration-200 font-medium"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;