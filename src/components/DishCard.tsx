import React from 'react';
import { MenuItemData } from '../types';
import { Heart, Star, Sparkles } from 'lucide-react';

interface DishCardProps {
  item: MenuItemData;
  categoryId: string;
  isFavorite: boolean;
  onToggleFavorite: (itemId: string, e: React.MouseEvent) => void;
  onOpenDetail: (item: MenuItemData) => void;
}

export const DishCard: React.FC<DishCardProps> = ({
  item,
  categoryId,
  isFavorite,
  onToggleFavorite,
  onOpenDetail,
}) => {
  // Badges Logic
  const isBestSeller = item.popularity === 'high';
  const isLimitedStock =
    item.name.includes('ইলিশ') ||
    item.name.includes('মাটন') ||
    item.name.includes('চিংড়ি') ||
    item.nameEnglish.toLowerCase().includes('ilish') ||
    item.nameEnglish.toLowerCase().includes('mutton') ||
    item.nameEnglish.toLowerCase().includes('chingri') ||
    item.nameEnglish.toLowerCase().includes('prawn');

  const isValueDeal = item.tags.includes('combo');

  return (
    <div
      data-id={item.id}
      data-name={item.name}
      data-popularity={item.popularity}
      data-tags={item.tags.join(',')}
      data-veg={item.veg ? 'true' : 'false'}
      data-price={item.price}
      data-category={categoryId}
      onClick={() => onOpenDetail(item)}
      className="group relative bg-[#F5EDD6] hover:bg-[#EDE0C4] border border-[#EDE0C4] rounded-[20px] p-4 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
    >
      {/* Top Bar: Veg/Non-Veg Indicator + Badges & Favorite Heart */}
      <div className="flex items-start justify-between gap-2 mb-2">
        {/* Veg / Non-Veg Indicator */}
        <div className="flex items-center gap-2">
          <div
            className={`w-4 h-4 border-2 flex items-center justify-center p-0.5 rounded-sm bg-white shrink-0 ${
              item.veg ? 'border-emerald-700' : 'border-red-700'
            }`}
            title={item.veg ? 'Vegetarian' : 'Non-Vegetarian'}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                item.veg ? 'bg-emerald-700' : 'bg-red-700'
              }`}
            />
          </div>

          {/* Badges Container */}
          <div className="flex flex-wrap gap-1">
            {isBestSeller && (
              <span className="badge badge-bestseller">BEST SELLER</span>
            )}
            {isLimitedStock && (
              <span className="badge badge-limited">LIMITED STOCK</span>
            )}
            {isValueDeal && (
              <span className="badge badge-valuedeal">VALUE DEAL</span>
            )}
          </div>
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => onToggleFavorite(item.id, e)}
          className={`p-1.5 rounded-full backdrop-blur-sm transition-transform active:scale-90 ${
            isFavorite
              ? 'bg-rose-100 text-rose-600'
              : 'bg-white/60 text-gray-400 hover:text-rose-500'
          }`}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-600' : ''}`} />
        </button>
      </div>

      {/* Item Names */}
      <div className="my-1">
        <h3 className="font-bengali text-lg font-bold text-[#6B0F0F] leading-snug group-hover:text-[#B22222] transition-colors">
          {item.name}
        </h3>
        <p className="font-body text-xs text-[#5C4033]/80 font-medium mt-0.5">
          {item.nameEnglish}
        </p>
      </div>

      {/* Bottom Row: Price & Details Link */}
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#EDE0C4]/80">
        <div className="flex items-baseline gap-1">
          <span className="font-heading text-lg font-extrabold text-[#B22222]">
            ₹{item.price}
          </span>
          <span className="text-[10px] text-gray-500 font-body">net</span>
        </div>

        <span className="text-[11px] font-medium text-[#6B0F0F] bg-amber-100/80 px-2.5 py-1 rounded-full group-hover:bg-[#FFD700] transition-colors">
          বিস্তারিত (Details)
        </span>
      </div>
    </div>
  );
};
