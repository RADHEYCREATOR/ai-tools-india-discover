import { useState } from 'react';

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ onCategoryChange }: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Education',
    'Design',
    'Writing',
    'Data',
    'Development',
    'Marketing',
    'Productivity',
    'Entertainment'
  ];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-6">Browse by Category</h2>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`category-pill ${
                activeCategory === category ? 'active' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;