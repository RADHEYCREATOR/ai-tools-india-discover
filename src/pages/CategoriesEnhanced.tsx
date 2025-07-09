import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryFilter from '../components/CategoryFilter';
import ToolCard from '../components/ToolCard';
import { Loader2 } from 'lucide-react';
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
  const [displayedTools, setDisplayedTools] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const TOOLS_PER_PAGE = 6;

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Extended tools data with more entries for infinite scroll
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
    },
    {
      id: '13',
      name: 'Copy.ai',
      description: 'AI-powered copywriting tool for marketing content',
      image: chatgptImg,
      category: 'Marketing',
      rating: 4.3,
      isFree: true,
      website: 'https://copy.ai'
    },
    {
      id: '14',
      name: 'Midjourney',
      description: 'AI image generation tool for creating artistic visuals',
      image: stableDiffusionImg,
      category: 'Design',
      rating: 4.8,
      isFree: false,
      website: 'https://midjourney.com'
    },
    {
      id: '15',
      name: 'Replit Ghostwriter',
      description: 'AI coding assistant integrated into the Replit environment',
      image: huggingfaceImg,
      category: 'Development',
      rating: 4.5,
      isFree: true,
      website: 'https://replit.com/ghostwriter'
    },
    {
      id: '16',
      name: 'Tome',
      description: 'AI-powered presentation and storytelling tool',
      image: gammaImg,
      category: 'Productivity',
      rating: 4.4,
      isFree: true,
      website: 'https://tome.app'
    },
    {
      id: '17',
      name: 'Synthesia',
      description: 'AI video generation platform for creating avatar videos',
      image: stableDiffusionImg,
      category: 'Entertainment',
      rating: 4.3,
      isFree: false,
      website: 'https://synthesia.io'
    },
    {
      id: '18',
      name: 'Wordtune',
      description: 'AI writing companion that helps you say exactly what you mean',
      image: chatgptImg,
      category: 'Writing',
      rating: 4.2,
      isFree: true,
      website: 'https://wordtune.com'
    }
  ];

  const filteredTools = selectedCategory === 'All' 
    ? allTools 
    : allTools.filter(tool => tool.category === selectedCategory);

  const loadMoreTools = useCallback(() => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const nextPageTools = filteredTools.slice(
        (page - 1) * TOOLS_PER_PAGE,
        page * TOOLS_PER_PAGE
      );
      
      if (nextPageTools.length === 0) {
        setHasMore(false);
      } else {
        setDisplayedTools(prev => [...prev, ...nextPageTools]);
        setPage(prev => prev + 1);
      }
      
      setLoading(false);
    }, 1000);
  }, [filteredTools, page, loading, hasMore]);

  // Reset when category changes
  useEffect(() => {
    setDisplayedTools([]);
    setPage(1);
    setHasMore(true);
    setLoading(false);
    
    // Load initial tools
    const initialTools = filteredTools.slice(0, TOOLS_PER_PAGE);
    setDisplayedTools(initialTools);
    setPage(2);
    setHasMore(filteredTools.length > TOOLS_PER_PAGE);
  }, [selectedCategory]);

  // Infinite scroll trigger
  useEffect(() => {
    if (inView && hasMore && !loading) {
      loadMoreTools();
    }
  }, [inView, hasMore, loading, loadMoreTools]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* SEO Meta Tags */}
      <title>AI Tools by Category - AIToolsIndia</title>
      <meta 
        name="description" 
        content="Browse AI tools by category including Writing, Design, Development, Marketing, and more. Find the perfect free AI tool for your needs." 
      />
      
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
              {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} available
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          
          {/* Loading Indicator */}
          {loading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-primary mr-2" />
              <span className="text-gray-600">Loading more tools...</span>
            </div>
          )}
          
          {/* Infinite Scroll Trigger */}
          {hasMore && !loading && (
            <div ref={ref} className="h-10 flex items-center justify-center">
              <div className="text-gray-400">Scroll for more tools...</div>
            </div>
          )}
          
          {/* No More Tools Message */}
          {!hasMore && displayedTools.length > 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">
                You've seen all {filteredTools.length} tools in this category!
              </p>
            </div>
          )}
          
          {displayedTools.length === 0 && !loading && (
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