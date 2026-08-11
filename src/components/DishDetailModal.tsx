import React from 'react';
import { MenuItemData } from '../types';
import { X, Heart, Sparkles, Check, Info } from 'lucide-react';

interface DishDetailModalProps {
  item: MenuItemData | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (itemId: string, e: React.MouseEvent) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  item,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[850] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#FAF6EF] rounded-t-[28px] sm:rounded-[24px] p-6 shadow-2xl border-2 border-[#FFD700]/60 animate-slide-up overflow-hidden max-h-[85vh] overflow-y-auto">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-[#EDE0C4] pb-4">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-5 h-5 border-2 flex items-center justify-center p-0.5 rounded-sm bg-white shrink-0 ${
                item.veg ? 'border-emerald-700' : 'border-red-700'
              }`}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  item.veg ? 'bg-emerald-700' : 'bg-red-700'
                }`}
              />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                {item.veg ? 'Vegetarian' : 'Non-Vegetarian'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-gray-700 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-4 space-y-4">
          <div>
            <h2 className="font-bengali text-2xl sm:text-3xl font-extrabold text-[#6B0F0F] leading-tight">
              {item.name}
            </h2>
            <p className="font-heading text-sm text-[#5C4033] font-medium mt-1">
              {item.nameEnglish}
            </p>
          </div>

          {/* Price Tag */}
          <div className="flex items-center justify-between bg-[#F5EDD6] p-3.5 rounded-xl border border-[#EDE0C4]">
            <span className="text-xs font-body text-amber-900 font-semibold">
              মূল্য (Price)
            </span>
            <span className="font-heading text-2xl font-black text-[#B22222]">
              ₹{item.price}
            </span>
          </div>

          {/* Authentic Description */}
          <div className="space-y-2 text-xs sm:text-sm text-gray-700 font-body leading-relaxed bg-white/70 p-3.5 rounded-xl border border-amber-200/60">
            <p className="flex items-start gap-1.5 font-bengali text-amber-950">
              <Info className="w-4 h-4 text-[#B22222] shrink-0 mt-0.5" />
              <span>
                ঐতিহ্যবাহী কোলকাতা স্টাইলে প্রস্তুত। টাটকা মশলা ও খাঁটি উপাদানে তৈরি।
              </span>
            </p>
            <p className="text-gray-600 italic">
              Authentic Bengali preparation cooked with traditional spices and fresh local ingredients.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase px-2.5 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Bar (Browse-Only: Favorite & Close) */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#EDE0C4]">
          <button
            onClick={(e) => onToggleFavorite(item.id, e)}
            className={`flex-1 py-3 px-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition-all ${
              isFavorite
                ? 'bg-rose-100 text-rose-700 border-rose-300'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-600' : ''}`} />
            <span>{isFavorite ? 'Saved in Favorites' : 'Save to Favorites'}</span>
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-full font-bold text-xs sm:text-sm bg-[#6B0F0F] hover:bg-[#8B0000] text-[#FFD700] shadow-md transition-all text-center"
          >
            বন্ধ করুন (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
