import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Tag, Gift, Flame } from 'lucide-react';

interface OfferBanner {
  id: string;
  titleBn: string;
  titleEn: string;
  subtitleBn: string;
  subtitleEn: string;
  tag: string;
  bgGradient: string;
  accentColor: string;
}

const OFFERS: OfferBanner[] = [
  {
    id: 'mahabhoj-offer',
    titleBn: 'মহাভোজ স্পেশাল থালি',
    titleEn: 'Grand Bengali Royal Feast',
    subtitleBn: 'ইলিশ, মটন, চিংড়ি, পাতুরি সহ রাজকীয় আহার @ ₹1699',
    subtitleEn: 'Complete Royal Thali with Ilish, Mutton, Chingri & Sweets',
    tag: 'ROYAL SPECIAL',
    bgGradient: 'from-[#6B0F0F] via-[#8B0000] to-[#B22222]',
    accentColor: '#FFD700',
  },
  {
    id: 'biryani-offer',
    titleBn: 'বিরিয়ানি ও চাপ উৎসব',
    titleEn: 'Biryani & Chaap Festival',
    subtitleBn: 'মটন বিরিয়ানি + চিকেন চাপ কম্বো মাত্র ₹499 এ!',
    subtitleEn: 'Mutton Biryani + Chicken Chaap Combo @ ₹499',
    tag: 'POPULAR COMBO',
    bgGradient: 'from-[#5C4033] via-[#7B3F00] to-[#B22222]',
    accentColor: '#FF9933',
  },
  {
    id: 'ilish-offer',
    titleBn: 'ইলিশ আহার উৎসব',
    titleEn: 'Queen of Fish - Ilish Festival',
    subtitleBn: 'পদ্মার সর্ষে ইলিশ, ইলিশ ভাজা ও ইলিশ থালি উপলব্ধ',
    subtitleEn: 'Authentic Sorshe Ilish, Ilish Bhaja & Ilish Special Thali',
    tag: 'SEASONAL DELIGHT',
    bgGradient: 'from-[#0F5132] via-[#1B4D3E] to-[#6B0F0F]',
    accentColor: '#FFD700',
  },
];

interface OfferCarouselProps {
  onSelectOffer?: (tag: string) => void;
}

export const OfferCarousel: React.FC<OfferCarouselProps> = ({ onSelectOffer }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % OFFERS.length);
    }, 4000); // 4s auto scroll
    return () => clearInterval(timer);
  }, []);

  const offer = OFFERS[activeIndex];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 my-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bengali text-lg font-bold text-[#6B0F0F] flex items-center gap-2">
          <Gift className="w-5 h-5 text-[#B22222]" />
          <span>বিশেষ অফার ও কম্বো (Special Offers)</span>
        </h2>
        <span className="text-xs text-amber-900 font-medium bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
          Auto-scrolling
        </span>
      </div>

      <div className="relative overflow-hidden rounded-[20px] shadow-lg border-2 border-[#FFD700]/50 min-h-[140px]">
        {/* Banner Card */}
        <div
          className={`w-full p-5 sm:p-6 bg-gradient-to-r ${offer.bgGradient} text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all duration-500 ease-in-out`}
        >
          <div className="space-y-1.5 max-w-lg">
            <span
              className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/40 text-[#FFD700] border border-[#FFD700]/30"
            >
              <Tag className="w-3 h-3 inline mr-1" />
              {offer.tag}
            </span>
            <h3 className="font-bengali text-xl sm:text-2xl font-bold text-[#FFD700] leading-tight">
              {offer.titleBn} <span className="font-heading text-base font-normal text-amber-100">({offer.titleEn})</span>
            </h3>
            <p className="font-bengali text-xs sm:text-sm text-amber-100/90 leading-relaxed">
              {offer.subtitleBn}
            </p>
          </div>

          <button
            onClick={() => onSelectOffer?.(offer.titleBn)}
            className="shrink-0 bg-[#FFD700] hover:bg-amber-300 text-[#6B0F0F] font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-md flex items-center gap-1.5 transition-transform active:scale-95"
          >
            <span>মেনুতে দেখুন</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {OFFERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === activeIndex ? 'w-6 bg-[#FFD700]' : 'w-1.5 bg-white/40'
              }`}
              aria-label={`Go to offer slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
