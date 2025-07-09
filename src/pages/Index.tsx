import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import ToolCard from '../components/ToolCard';
import Footer from '../components/Footer';
import chatgptImg from '../assets/tools/chatgpt.jpg';
import canvaImg from '../assets/tools/canva.jpg';
import gammaImg from '../assets/tools/gamma.jpg';
import huggingfaceImg from '../assets/tools/huggingface.jpg';
import notionImg from '../assets/tools/notion.jpg';
import stableDiffusionImg from '../assets/tools/stable-diffusion.jpg';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample tool data
  const tools = [
    {
      id: '1',
      name: 'ChatGPT',
      description: 'AI-powered chatbot for conversations, writing assistance, and problem-solving',
      image: chatgptImg,
      category: 'Writing',
      rating: 4.8,
      isFree: true,
      website: 'https://chat.openai.com'
    },
    {
      id: '2',
      name: 'Canva AI',
      description: 'Design graphics, presentations, and social media content with AI assistance',
      image: canvaImg,
      category: 'Design',
      rating: 4.6,
      isFree: true,
      website: 'https://canva.com'
    },
    {
      id: '3',
      name: 'Gamma',
      description: 'Create presentations, documents, and websites with AI-powered design',
      image: gammaImg,
      category: 'Productivity',
      rating: 4.5,
      isFree: true,
      website: 'https://gamma.app'
    },
    {
      id: '4',
      name: 'Hugging Face',
      description: 'Open-source AI models and datasets for machine learning projects',
      image: huggingfaceImg,
      category: 'Development',
      rating: 4.7,
      isFree: true,
      website: 'https://huggingface.co'
    },
    {
      id: '5',
      name: 'Notion AI',
      description: 'AI-powered note-taking and project management tool',
      image: notionImg,
      category: 'Productivity',
      rating: 4.4,
      isFree: true,
      website: 'https://notion.so'
    },
    {
      id: '6',
      name: 'Stable Diffusion',
      description: 'Generate high-quality images from text descriptions',
      image: stableDiffusionImg,
      category: 'Design',
      rating: 4.6,
      isFree: true,
      website: 'https://stability.ai'
    }
  ];

  const filteredTools = selectedCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>AIToolsIndia - Discover the Best Free AI Tools in India</title>
        <meta name="description" content="Find the best free AI tools for students, creators, and professionals in India. Curated collection of ChatGPT, Canva AI, Stable Diffusion, and more." />
        <meta property="og:title" content="AIToolsIndia - Discover the Best Free AI Tools in India" />
        <meta property="og:description" content="Find the best free AI tools for students, creators, and professionals in India." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CategoryFilter onCategoryChange={setSelectedCategory} />
      
      {/* Featured Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured AI Tools</h2>
            <p className="text-lg text-gray-600">
              Discover the most popular and effective AI tools used by professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/categories" className="btn-outline">
              View All Tools
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-light">AI Tools Curated</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-primary-light">Users Helped</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-light">Free Access</div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
    </>
  );
};

export default Index;
