import React from 'react';
import { ScreenName } from '../types';
import { Home, UtensilsCrossed, Tag, Heart } from 'lucide-react';

interface BottomNavProps {
  currentScreen: ScreenName;
  onNavigate: (screen: ScreenName) => void;
  favoritesCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentScreen,
  onNavigate,
  favoritesCount,
}) => {
  const tabs = [
    { id: 'home' as ScreenName, labelBn: 'হোম', labelEn: 'Home', icon: Home },
    { id: 'menu' as ScreenName, labelBn: 'মেনু', labelEn: 'Menu', icon: UtensilsCrossed },
    { id: 'offers' as ScreenName, labelBn: 'অফার', labelEn: 'Offers', icon: Tag },
    { id: 'fav' as ScreenName, labelBn: 'প্রিয়', labelEn: 'Favorites', icon: Heart, badge: favoritesCount },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[50] bg-gradient-to-r from-[#6B0F0F] via-[#B22222] to-[#6B0F0F] border-t-2 border-[#FFD700]/40 text-white shadow-2xl">
      <div className="max-w-md mx-auto flex items-center justify-around py-2 px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentScreen === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`relative flex flex-col items-center justify-center w-16 py-1 rounded-xl transition-all ${
                isActive
                  ? 'text-[#FFD700] bg-black/20 font-bold scale-105'
                  : 'text-amber-100/70 hover:text-white'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white shadow-xs">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="font-bengali text-[11px] leading-tight mt-1">
                {tab.labelBn}
              </span>
              <span className="text-[9px] font-heading opacity-70 leading-none">
                {tab.labelEn}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
