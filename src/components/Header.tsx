import React from 'react';
import { RestaurantData } from '../types';
import { Phone, MapPin, Globe, Shield } from 'lucide-react';

interface HeaderProps {
  restaurant: RestaurantData;
  onLogoClick: () => void;
  isLocked?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ restaurant, onLogoClick, isLocked }) => {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-[#6B0F0F] via-[#B22222] to-[#6B0F0F] text-white shadow-lg border-b-2 border-[#FFD700]/30">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={onLogoClick}
          className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-[#FFD700] rounded-xl p-1 transition-all"
          title="Click to access Admin Panel (PIN required)"
          data-action="open-admin"
        >
          <div className="w-12 h-12 rounded-full bg-[#FFD700] p-0.5 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform border-2 border-white/20">
            <div className="w-full h-full rounded-full bg-[#6B0F0F] flex items-center justify-center text-[#FFD700] font-bengali text-xl font-bold border border-[#FFD700]">
              ভ
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-bengali text-2xl font-bold tracking-wide text-[#FFD700] drop-shadow-sm leading-none">
                {restaurant.name}
              </h1>
              {isLocked && (
                <span className="bg-red-900/80 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">
                  LOCKED
                </span>
              )}
            </div>
            <p className="font-heading italic text-xs text-amber-100/90 tracking-wider font-medium">
              {restaurant.nameEnglish} • Kolkata
            </p>
          </div>
        </button>

        {/* Quick Contact & Admin Quick Trigger */}
        <div className="hidden sm:flex items-center gap-4 text-xs text-amber-100/80">
          <a
            href={`tel:${restaurant.phone}`}
            className="flex items-center gap-1 hover:text-[#FFD700] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>{restaurant.phone}</span>
          </a>
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>Bentinck St</span>
          </div>
        </div>

        <button
          onClick={onLogoClick}
          className="sm:hidden p-2 text-[#FFD700]/80 hover:text-[#FFD700] transition-colors"
          title="Admin Panel"
        >
          <Shield className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
