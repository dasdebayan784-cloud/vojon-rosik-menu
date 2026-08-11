import React from 'react';
import { MenuItemData } from '../types';
import { Flame } from 'lucide-react';
import { DishCard } from './DishCard';

interface TopPicksRowProps {
  items: MenuItemData[];
  categoryId: string;
  favorites: string[];
  onToggleFavorite: (itemId: string, e: React.MouseEvent) => void;
  onOpenDetail: (item: MenuItemData) => void;
  categoryName?: string;
}

export const TopPicksRow: React.FC<TopPicksRowProps> = ({
  items,
  categoryId,
  favorites,
  onToggleFavorite,
  onOpenDetail,
  categoryName,
}) => {
  // Filter max 3 items with popularity="high"
  const topPicks = items
    .filter((item) => item.popularity === 'high')
    .slice(0, 3);

  // If no high popularity items exist in this list, render nothing!
  if (topPicks.length === 0) return null;

  return (
    <div className="w-full my-4 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-amber-500/10 p-3.5 rounded-[20px] border border-amber-300/60 shadow-sm">
      <div className="flex items-center gap-2 mb-2.5">
        <span className="p-1 rounded-full bg-[#B22222] text-[#FFD700]">
          <Flame className="w-4 h-4 fill-[#FFD700]" />
        </span>
        <h3 className="font-bengali text-sm sm:text-base font-bold text-[#6B0F0F]">
          🔥 রেকমেন্ডেড (Top Recommended {categoryName ? `in ${categoryName}` : ''})
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {topPicks.map((item) => (
          <DishCard
            key={`top-pick-${item.id}`}
            item={item}
            categoryId={categoryId}
            isFavorite={favorites.includes(item.id)}
            onToggleFavorite={onToggleFavorite}
            onOpenDetail={onOpenDetail}
          />
        ))}
      </div>
    </div>
  );
};
