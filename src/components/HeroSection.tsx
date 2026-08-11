import React from 'react';
import { Search, Clock, MapPin, Sparkles } from 'lucide-react';
import { RestaurantData } from '../types';

interface HeroSectionProps {
  restaurant: RestaurantData;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  restaurant,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}) => {
  return (
    <section className="relative min-h-[55vh] flex flex-col justify-center items-center text-center px-4 py-12 overflow-hidden bg-gradient-to-b from-[#6B0F0F] via-[#B22222] to-[#800C0C] text-white shadow-xl">
      {/* Subtle Decorative Pattern Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden="true"
      />

      {/* Content Box */}
      <div className="relative z-10 max-w-2xl mx-auto w-full flex flex-col items-center">
        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-[#FFD700]/40 text-[#FFD700] text-xs font-medium mb-6 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Clock className="w-3.5 h-3.5 text-[#FFD700]" />
          <span>Open Now • {restaurant.timing}</span>
        </div>

        {/* Hero Bengali Title */}
        <h1 className="font-bengali text-4xl sm:text-6xl font-extrabold text-[#FFD700] tracking-wide mb-2 drop-shadow-md leading-tight">
          {restaurant.name}
        </h1>

        {/* Pinyon Script Tagline */}
        <p className="font-tagline text-2xl sm:text-3xl text-amber-100 font-normal mb-3 drop-shadow">
          {restaurant.tagline}
        </p>

        {/* Address & Info */}
        <p className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-amber-200/90 font-body mb-8 max-w-md">
          <MapPin className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
          <span>{restaurant.address}</span>
        </p>

        {/* Hero Search Bar */}
        <div className="w-full max-w-lg bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl border-2 border-[#FFD700]/50 text-gray-800 flex items-center gap-2">
          <Search className="w-5 h-5 text-[#B22222] ml-2 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search items in Bengali or English (e.g. Biryani, ইলিশ)..."
            className="w-full bg-transparent text-gray-900 placeholder-gray-500 text-sm sm:text-base font-body focus:outline-none py-1.5 px-1"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="text-xs text-gray-400 hover:text-gray-600 px-2 py-1 bg-gray-100 rounded-full"
            >
              Clear
            </button>
          )}
        </div>

        {/* Popular Tags Quick Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs">
          {['Biryani', 'সর্ষে ইলিশ', 'মাটন কষা', 'থালি', 'চিংড়ি', 'মিষ্টি'].map((tag) => (
            <button
              key={tag}
              onClick={() => onSearchChange(tag)}
              className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-amber-100 transition-colors text-[11px]"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
