import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryFilter from '../components/CategoryFilter';
import ToolCard from '../components/ToolCard';
import chatgptImg from '../assets/tools/chatgpt.jpg';
import canvaImg from '../assets/tools/canva.jpg';
import gammaImg from '../assets/tools/gamma.jpg';
import huggingfaceImg from '../assets/tools/huggingface.jpg';
import notionImg from '../assets/tools/notion.jpg';
import stableDiffusionImg from '../assets/tools/stable-diffusion.jpg';

const Categories = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // All available tools
  const allTools = [
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
    },
    {
      id: '7',
      name: 'Grammarly',
      description: 'AI-powered writing assistant for grammar, style, and clarity',
      image: chatgptImg,
      category: 'Writing',
      rating: 4.3,
      isFree: true,
      website: 'https://grammarly.com'
    },
    {
      id: '8',
      name: 'Figma AI',
      description: 'Design and prototyping tool with AI-powered features',
      image: canvaImg,
      category: 'Design',
      rating: 4.5,
      isFree: true,
      website: 'https://figma.com'
    },
    {
      id: '9',
      name: 'GitHub Copilot',
      description: 'AI pair programmer that helps you write code faster',
      image: huggingfaceImg,
      category: 'Development',
      rating: 4.7,
      isFree: false,
      website: 'https://github.com/features/copilot'
    },
    {
      id: '10',
      name: 'Jasper AI',
      description: 'AI content generator for marketing copy and blog posts',
      image: chatgptImg,
      category: 'Marketing',
      rating: 4.4,
      isFree: false,
      website: 'https://jasper.ai'
    },
    {
      id: '11',
      name: 'Loom AI',
      description: 'Screen recording with AI-powered transcription and summaries',
      image: gammaImg,
      category: 'Productivity',
      rating: 4.2,
      isFree: true,
      website: 'https://loom.com'
    },
    {
      id: '12',
      name: 'Runway ML',
      description: 'Creative AI tools for video editing and generation',
      image: stableDiffusionImg,
      category: 'Entertainment',
      rating: 4.6,
      isFree: true,
      website: 'https://runwayml.com'
    }
  ];

  const filteredTools = selectedCategory === 'All' 
    ? allTools 
    : allTools.filter(tool => tool.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Browse AI Tools by Category</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover the perfect AI tool for your needs from our curated collection
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <CategoryFilter onCategoryChange={setSelectedCategory} />
      
      {/* Tools Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'All Tools' : `${selectedCategory} Tools`}
            </h2>
            <span className="text-gray-600">
              {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No tools found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Categories;