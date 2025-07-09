import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import chatgptImg from '../assets/tools/chatgpt.jpg';
import canvaImg from '../assets/tools/canva.jpg';
import gammaImg from '../assets/tools/gamma.jpg';
import huggingfaceImg from '../assets/tools/huggingface.jpg';
import notionImg from '../assets/tools/notion.jpg';
import stableDiffusionImg from '../assets/tools/stable-diffusion.jpg';

const ToolDetail = () => {
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample tool data (in a real app, this would come from an API)
  const tools = [
    {
      id: '1',
      name: 'ChatGPT',
      description: 'ChatGPT is an AI-powered conversational assistant developed by OpenAI. It can help with writing, answering questions, coding, creative tasks, and much more. Built on the GPT-3.5 and GPT-4 architecture, it provides human-like responses and can engage in natural conversations.',
      image: chatgptImg,
      category: 'Writing',
      rating: 4.8,
      isFree: true,
      website: 'https://chat.openai.com',
      features: [
        'Natural language conversations',
        'Code generation and debugging',
        'Creative writing assistance',
        'Question answering',
        'Language translation',
        'Summarization capabilities'
      ],
      pricing: 'Free tier available, Plus at $20/month'
    },
    {
      id: '2',
      name: 'Canva AI',
      description: 'Canva AI combines the power of artificial intelligence with intuitive design tools. Create stunning graphics, presentations, and social media content with AI-powered suggestions, automatic resizing, and smart design recommendations.',
      image: canvaImg,
      category: 'Design',
      rating: 4.6,
      isFree: true,
      website: 'https://canva.com',
      features: [
        'AI-powered design suggestions',
        'Automatic background removal',
        'Smart resize for multiple formats',
        'Text-to-image generation',
        'Brand kit integration',
        'Collaboration tools'
      ],
      pricing: 'Free tier available, Pro at $12.99/month'
    },
    // Add more tools as needed
  ];

  const tool = tools.find(t => t.id === id);
  const relatedTools = tools.filter(t => t.id !== id && t.category === tool?.category).slice(0, 3);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % relatedTools.length);
  }, [relatedTools.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + relatedTools.length) % relatedTools.length);
  }, [relatedTools.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Tool Not Found</h1>
            <Link to="/categories" className="btn-primary">
              Browse All Tools
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.description,
    "category": tool.category,
    "offers": {
      "@type": "Offer",
      "price": tool.isFree ? "0" : "varies",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": tool.rating,
      "bestRating": "5",
      "ratingCount": "1000"
    },
    "url": tool.website,
    "image": tool.image,
    "provider": {
      "@type": "Organization",
      "name": "AIToolsIndia"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-500">/</span>
              </li>
              <li>
                <Link to="/categories" className="text-gray-500 hover:text-gray-700">
                  Categories
                </Link>
              </li>
              <li>
                <span className="text-gray-500">/</span>
              </li>
              <li>
                <span className="text-gray-900 font-medium">{tool.name}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Tool Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tool Image */}
            <div>
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden">
                <img 
                  src={tool.image} 
                  alt={tool.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Tool Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
                {tool.isFree && (
                  <span className="badge-free">FREE</span>
                )}
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold">{tool.rating}</span>
                </div>
                <span className="text-sm text-accent font-medium bg-accent-light px-3 py-1 rounded-full">
                  {tool.category}
                </span>
              </div>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {tool.description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Pricing</h3>
                <p className="text-gray-600">{tool.pricing}</p>
              </div>
              
              <button
                onClick={() => window.open(tool.website, '_blank')}
                className="btn-primary w-full sm:w-auto flex items-center justify-center space-x-2"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Visit Website</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools Carousel */}
      {relatedTools.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Related {tool.category} Tools
            </h2>
            
            <div className="relative">
              <div className="flex overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {relatedTools.map((relatedTool) => (
                    <div key={relatedTool.id} className="w-full flex-shrink-0 px-4">
                      <ToolCard tool={relatedTool} />
                    </div>
                  ))}
                </div>
              </div>
              
              {relatedTools.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
                    aria-label="Previous tool"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-600" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
                    aria-label="Next tool"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-600" />
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default ToolDetail;