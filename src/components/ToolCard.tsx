import { ExternalLink, Star } from 'lucide-react';

interface ToolCardProps {
  tool: {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    rating: number;
    isFree: boolean;
    website: string;
  };
}

const ToolCard = ({ tool }: ToolCardProps) => {
  const handleCardClick = () => {
    window.open(tool.website, '_blank');
  };

  return (
    <div className="tool-card group" onClick={handleCardClick}>
      {/* Tool Image */}
      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
        <img 
          src={tool.image} 
          alt={tool.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      
      {/* Tool Info */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-accent font-medium bg-accent-light px-2 py-1 rounded">
            {tool.category}
          </span>
          {tool.isFree && (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
              FREE
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {tool.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {tool.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{tool.rating}</span>
          </div>
          
          <button 
            className="btn-primary text-sm py-2 px-4 flex items-center space-x-2"
            onClick={(e) => {
              e.stopPropagation();
              window.open(tool.website, '_blank');
            }}
          >
            <span>Visit Website</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;