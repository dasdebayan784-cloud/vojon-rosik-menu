import React from 'react';
import { MenuCategoryData } from '../types';
import {
  Utensils,
  UtensilsCrossed,
  Soup,
  Flame,
  Leaf,
  Fish,
  Crown,
  Sparkles,
  Cake,
  Layers
} from 'lucide-react';

interface CategoryChipsProps {
  categories: MenuCategoryData[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  snacks: <Utensils className="w-5 h-5 text-[#B22222]" />,
  rice: <Soup className="w-5 h-5 text-[#B22222]" />,
  biryani: <Flame className="w-5 h-5 text-[#B22222]" />,
  'veg-alacarte': <Leaf className="w-5 h-5 text-emerald-700" />,
  'nonveg-alacarte': <Fish className="w-5 h-5 text-[#B22222]" />,
  'veg-thali': <UtensilsCrossed className="w-5 h-5 text-emerald-700" />,
  'nonveg-thali': <Crown className="w-5 h-5 text-[#B22222]" />,
  combo: <Sparkles className="w-5 h-5 text-amber-600" />,
  desserts: <Cake className="w-5 h-5 text-rose-600" />,
};

export const CategoryChips: React.FC<CategoryChipsProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 my-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-bengali text-base font-bold text-[#6B0F0F] flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-[#B22222]" />
          <span>ক্যাটাগরি সমূহ (Categories)</span>
        </h2>
        {selectedCategory && (
          <button
            onClick={() => onSelectCategory(null)}
            className="text-xs text-[#B22222] font-semibold underline"
          >
            সব দেখুন (Show All)
          </button>
        )}
      </div>

      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 px-1">
        {/* 'All' Chip */}
        <button
          onClick={() => onSelectCategory(null)}
          className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-[100px] text-xs font-bold transition-all shadow-sm ${
            selectedCategory === null
              ? 'bg-[#6B0F0F] text-[#FFD700] ring-2 ring-[#FFD700] shadow-md scale-105'
              : 'bg-[#F5EDD6] text-[#5C4033] hover:bg-[#EDE0C4] border border-[#EDE0C4]'
          }`}
        >
          <span className="font-bengali font-bold text-sm">সবকটি</span>
          <span className="text-[10px] opacity-80 uppercase font-heading">(All)</span>
        </button>

        {/* Category List */}
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-[100px] transition-all shadow-sm ${
                isSelected
                  ? 'bg-[#6B0F0F] text-[#FFD700] ring-2 ring-[#FFD700] shadow-md scale-105'
                  : 'bg-[#F5EDD6] text-[#5C4033] hover:bg-[#EDE0C4] border border-[#EDE0C4]'
              }`}
            >
              <span className="p-1 rounded-full bg-white/80 shadow-xs">
                {CATEGORY_ICONS[cat.id] || <Utensils className="w-4 h-4 text-[#B22222]" />}
              </span>
              <div className="text-left">
                <span className="block font-bengali font-bold text-xs sm:text-sm leading-tight">
                  {cat.name}
                </span>
                <span className="block text-[10px] font-heading font-medium opacity-80 leading-none">
                  {cat.nameEnglish}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
