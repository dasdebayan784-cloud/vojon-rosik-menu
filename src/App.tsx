import React, { useState, useEffect, useMemo } from 'react';
import {
  ScreenName,
  FilterType,
  MenuItemData,
  MasterMenuData,
  AppState
} from './types';
import { MASTER_MENU as DEFAULT_MASTER_MENU } from './master-menu';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoryChips } from './components/CategoryChips';
import { OfferCarousel } from './components/OfferCarousel';
import { TopPicksRow } from './components/TopPicksRow';
import { DishCard } from './components/DishCard';
import { DishDetailModal } from './components/DishDetailModal';
import { BottomNav } from './components/BottomNav';
import { ReviewFunnel } from './components/ReviewFunnel';
import { AdminPanel } from './components/AdminPanel';
import { SubscriptionLock } from './components/SubscriptionLock';
import {
  Search,
  Filter,
  Heart,
  Sparkles,
  MapPin,
  Phone,
  Globe,
  Clock,
  Info,
  Utensils,
  Tag,
  Star,
  CheckCircle2,
  Flame,
  ChevronRight
} from 'lucide-react';

export default function App() {
  // Master Menu State (Fetched from Central API or local fallback)
  const [menuData, setMenuData] = useState<MasterMenuData>(DEFAULT_MASTER_MENU);

  // App State
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDish, setSelectedDish] = useState<MenuItemData | null>(null);

  // Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('vojon_rosik_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Subscription Lock State
  const [expiryDate, setExpiryDate] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem('sub_expiry_date');
      if (saved) return saved;
      // Default initial expiry: 30 days from now
      const defaultDate = new Date();
      defaultDate.setDate(defaultDate.getDate() + 30);
      const iso = defaultDate.toISOString();
      localStorage.setItem('sub_expiry_date', iso);
      return iso;
    } catch {
      return null;
    }
  });

  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

  // Check Subscription Lock on mount & every 60s
  useEffect(() => {
    const checkLock = () => {
      if (!expiryDate) {
        setIsLocked(true);
      } else {
        const expTime = new Date(expiryDate).getTime();
        setIsLocked(expTime < Date.now());
      }
    };

    checkLock();
    const interval = setInterval(checkLock, 60000); // 60s re-check
    return () => clearInterval(interval);
  }, [expiryDate]);

  // Save Favorites
  useEffect(() => {
    try {
      localStorage.setItem('vojon_rosik_favs', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites:', e);
    }
  }, [favorites]);

  // Fetch Master Menu from Central API
  useEffect(() => {
    fetch('/api/menu')
      .then((res) => {
        if (!res.ok) throw new Error('API Response Not OK');
        return res.json();
      })
      .then((payload) => {
        if (payload && payload.data) {
          setMenuData(payload.data);
        }
      })
      .catch((err) => {
        console.warn('Central API fetch fallback to MASTER_MENU:', err);
      });
  }, []);

  // Update Expiry Date Handler (Admin)
  const handleUpdateExpiry = (newExpiryIso: string) => {
    setExpiryDate(newExpiryIso);
    try {
      localStorage.setItem('sub_expiry_date', newExpiryIso);
    } catch (e) {
      console.error('Failed to save sub_expiry_date:', e);
    }
    const expTime = new Date(newExpiryIso).getTime();
    setIsLocked(expTime < Date.now());
  };

  // Toggle Favorite
  const handleToggleFavorite = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  // Filter & Search Logic
  const filteredCategories = useMemo(() => {
    return menuData.categories
      .map((cat) => {
        // Filter items within category
        let items = cat.items;

        // Category Filter
        if (selectedCategory && cat.id !== selectedCategory) {
          return null;
        }

        // Veg / Non-Veg Filter
        if (activeFilter === 'Veg') {
          items = items.filter((item) => item.veg);
        } else if (activeFilter === 'Non-Veg') {
          items = items.filter((item) => !item.veg);
        }

        // Search Query Filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          items = items.filter(
            (item) =>
              item.name.toLowerCase().includes(q) ||
              item.nameEnglish.toLowerCase().includes(q) ||
              item.tags.some((t) => t.toLowerCase().includes(q))
          );
        }

        if (items.length === 0) return null;

        return {
          ...cat,
          items,
        };
      })
      .filter(Boolean) as typeof menuData.categories;
  }, [menuData, selectedCategory, activeFilter, searchQuery]);

  // Flat array of all favorite item objects
  const favoriteItems = useMemo(() => {
    const allItems: MenuItemData[] = [];
    menuData.categories.forEach((cat) => {
      cat.items.forEach((item) => {
        if (favorites.includes(item.id)) {
          allItems.push(item);
        }
      });
    });
    return allItems;
  }, [menuData, favorites]);

  // Navigate & select category
  const handleSelectCategoryFromHome = (catId: string | null) => {
    setSelectedCategory(catId);
    setCurrentScreen('menu');
  };

  return (
    <div className="min-h-screen pb-24 bg-[#FAF6EF] font-body text-[#2D1B18] flex flex-col">
      {/* HEADER */}
      <Header
        restaurant={menuData.restaurant}
        onLogoClick={() => setIsAdminOpen(true)}
        isLocked={isLocked}
      />

      {/* SCREEN 1: HOME */}
      {currentScreen === 'home' && (
        <main className="flex-1 animate-fade-in">
          {/* Hero Banner */}
          <HeroSection
            restaurant={menuData.restaurant}
            searchQuery={searchQuery}
            onSearchChange={(q) => {
              setSearchQuery(q);
              if (q.trim()) setCurrentScreen('menu');
            }}
          />

          {/* Offer Banner Carousel */}
          <OfferCarousel
            onSelectOffer={(tag) => {
              setSearchQuery(tag);
              setCurrentScreen('menu');
            }}
          />

          {/* Category Horizontal Chips */}
          <CategoryChips
            categories={menuData.categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategoryFromHome}
          />

          {/* Global Recommended / Top Picks Section */}
          <div className="max-w-4xl mx-auto px-4 my-6">
            <h2 className="font-bengali text-xl font-extrabold text-[#6B0F0F] flex items-center gap-2 mb-3">
              <Flame className="w-5 h-5 text-[#B22222] fill-[#B22222]" />
              <span>জনপ্রিয় পদসমূহ (Popular Top Picks)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {menuData.categories
                .flatMap((c) => c.items.map((item) => ({ item, catId: c.id })))
                .filter(({ item }) => item.popularity === 'high')
                .slice(0, 6)
                .map(({ item, catId }) => (
                  <DishCard
                    key={`home-pop-${item.id}`}
                    item={item}
                    categoryId={catId}
                    isFavorite={favorites.includes(item.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onOpenDetail={setSelectedDish}
                  />
                ))}
            </div>
          </div>

          {/* Restaurant Footer Details */}
          <footer className="max-w-4xl mx-auto px-4 my-10 border-t-2 border-[#EDE0C4] pt-8 text-center text-xs text-gray-700 space-y-3">
            <div className="font-bengali text-lg font-bold text-[#6B0F0F]">
              {menuData.restaurant.name} ({menuData.restaurant.nameEnglish})
            </div>
            <p className="flex items-center justify-center gap-1.5 text-gray-600">
              <MapPin className="w-4 h-4 text-[#B22222]" />
              <span>{menuData.restaurant.address}</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-700 font-medium">
              <a
                href={`tel:${menuData.restaurant.phone}`}
                className="flex items-center gap-1 hover:text-[#B22222]"
              >
                <Phone className="w-3.5 h-3.5 text-[#B22222]" />
                <span>{menuData.restaurant.phone}</span>
              </a>
              <a
                href={`https://${menuData.restaurant.website}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-[#B22222]"
              >
                <Globe className="w-3.5 h-3.5 text-[#B22222]" />
                <span>{menuData.restaurant.website}</span>
              </a>
            </div>
            <p className="text-[11px] font-mono text-gray-500">
              GSTIN: {menuData.restaurant.gstin} | Delivery on Zomato & Swiggy
            </p>
            <p className="text-[10px] text-amber-900 bg-amber-100/80 p-2 rounded-lg max-w-md mx-auto">
              {menuData.restaurant.notes}
            </p>
          </footer>
        </main>
      )}

      {/* SCREEN 2: MENU */}
      {currentScreen === 'menu' && (
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-4 animate-fade-in space-y-4">
          {/* Search & Filter Header Bar */}
          <div className="bg-[#F5EDD6] p-4 rounded-[20px] border border-[#EDE0C4] shadow-xs space-y-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-800" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish name in Bengali or English..."
                className="w-full pl-9 pr-8 py-2 bg-white rounded-xl text-xs sm:text-sm text-gray-800 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-[#B22222]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-700"
                >
                  ✕
                </button>
              )}
            </div>

            {/* ONLY 3 FILTERS: সব (All) | ভেজ (Veg) | নন-ভেজ (Non-Veg) */}
            <div className="flex items-center justify-between gap-2 border-t border-amber-200/80 pt-2.5">
              <span className="text-xs font-bold text-[#6B0F0F] flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#B22222]" />
                <span>ফিল্টার (Filter):</span>
              </span>

              <div className="flex items-center gap-1.5">
                {(['All', 'Veg', 'Non-Veg'] as FilterType[]).map((filter) => {
                  const isActive = activeFilter === filter;
                  const labelBn =
                    filter === 'All' ? 'সব' : filter === 'Veg' ? 'ভেজ' : 'নন-ভেজ';
                  return (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#6B0F0F] text-[#FFD700] shadow-sm'
                          : 'bg-white text-gray-700 hover:bg-amber-100 border border-amber-300'
                      }`}
                    >
                      {labelBn} ({filter})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Category Chips Bar */}
          <CategoryChips
            categories={menuData.categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Category Dish Listings */}
          {filteredCategories.length === 0 ? (
            <div className="py-12 text-center bg-white rounded-[20px] border border-dashed border-amber-300 p-6">
              <Utensils className="w-10 h-10 text-amber-500 mx-auto mb-2" />
              <p className="font-bengali text-lg font-bold text-[#6B0F0F]">
                কোনো খাবার পাওয়া যায়নি
              </p>
              <p className="text-xs text-gray-500 mt-1">
                No items matched your search or filter options.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('All');
                  setSelectedCategory(null);
                }}
                className="mt-4 px-4 py-2 bg-[#6B0F0F] text-[#FFD700] rounded-full text-xs font-bold"
              >
                ফিল্টার রিসেট করুন (Reset Filters)
              </button>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <section key={cat.id} className="space-y-3 pt-2">
                {/* Category Header */}
                <div className="flex items-center justify-between border-b-2 border-[#6B0F0F]/20 pb-2">
                  <div className="flex items-baseline gap-2">
                    <h2 className="font-bengali text-2xl font-bold text-[#6B0F0F]">
                      {cat.name}
                    </h2>
                    <span className="font-heading text-xs text-amber-900 font-semibold">
                      ({cat.nameEnglish})
                    </span>
                  </div>

                  <span className="text-xs font-bold text-gray-500 bg-amber-100 px-2.5 py-0.5 rounded-full">
                    {cat.items.length} items
                  </span>
                </div>

                {/* Top Picks Row Injected Before Category Grid */}
                <TopPicksRow
                  items={cat.items}
                  categoryId={cat.id}
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  onOpenDetail={setSelectedDish}
                  categoryName={cat.name}
                />

                {/* Main Dishes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {cat.items.map((item) => (
                    <DishCard
                      key={item.id}
                      item={item}
                      categoryId={cat.id}
                      isFavorite={favorites.includes(item.id)}
                      onToggleFavorite={handleToggleFavorite}
                      onOpenDetail={setSelectedDish}
                    />
                  ))}
                </div>
              </section>
            ))
          )}
        </main>
      )}

      {/* SCREEN 3: OFFERS */}
      {currentScreen === 'offers' && (
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-4 animate-fade-in space-y-6">
          <div className="bg-[#6B0F0F] text-[#FFD700] p-6 rounded-[24px] shadow-lg border-2 border-[#FFD700] text-center space-y-2">
            <Tag className="w-10 h-10 mx-auto text-[#FFD700]" />
            <h2 className="font-bengali text-3xl font-extrabold">
              বিশেষ অফার ও রাজকীয় কম্বো
            </h2>
            <p className="font-heading text-xs text-amber-100">
              Exclusive Bengali Combos & Value Feast Deals
            </p>
          </div>

          <OfferCarousel
            onSelectOffer={(tag) => {
              setSearchQuery(tag);
              setCurrentScreen('menu');
            }}
          />

          {/* Combo Dishes Section */}
          <section className="space-y-4">
            <h3 className="font-bengali text-xl font-bold text-[#6B0F0F] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span>কম্বো ও স্পেশাল থালি সমূহ (Combos & Feasts)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {menuData.categories
                .flatMap((c) => c.items.map((item) => ({ item, catId: c.id })))
                .filter(
                  ({ item }) =>
                    item.tags.includes('combo') ||
                    item.tags.includes('special') ||
                    item.price > 400
                )
                .map(({ item, catId }) => (
                  <DishCard
                    key={`offer-item-${item.id}`}
                    item={item}
                    categoryId={catId}
                    isFavorite={favorites.includes(item.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onOpenDetail={setSelectedDish}
                  />
                ))}
            </div>
          </section>
        </main>
      )}

      {/* SCREEN 4: FAVORITES */}
      {currentScreen === 'fav' && (
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-4 animate-fade-in space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#6B0F0F]/20 pb-3">
            <div>
              <h2 className="font-bengali text-2xl font-bold text-[#6B0F0F] flex items-center gap-2">
                <Heart className="w-6 h-6 text-rose-600 fill-rose-600" />
                <span>আপনার প্রিয় ডিশ (Saved Favorites)</span>
              </h2>
              <p className="text-xs text-gray-500 font-body">
                Quickly browse your saved Bengali dishes
              </p>
            </div>

            <span className="text-xs font-bold text-rose-800 bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
              {favoriteItems.length} items
            </span>
          </div>

          {favoriteItems.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-[24px] border border-dashed border-amber-300 p-8 space-y-3">
              <Heart className="w-12 h-12 text-gray-300 mx-auto" />
              <h3 className="font-bengali text-xl font-bold text-[#6B0F0F]">
                আপনার কোনো প্রিয় ডিশ সেভ করা নেই এখনো
              </h3>
              <p className="text-xs text-gray-500 font-body max-w-sm mx-auto">
                Explore the menu and tap the heart icon on any dish to save it here for quick browsing!
              </p>
              <button
                onClick={() => setCurrentScreen('menu')}
                className="mt-2 px-5 py-2.5 bg-[#6B0F0F] text-[#FFD700] font-bold rounded-full text-xs shadow-md"
              >
                মেনু ব্রাউজ করুন (Browse Menu)
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {favoriteItems.map((item) => (
                <DishCard
                  key={`fav-page-${item.id}`}
                  item={item}
                  categoryId={item.tags[0] || 'all'}
                  isFavorite={true}
                  onToggleFavorite={handleToggleFavorite}
                  onOpenDetail={setSelectedDish}
                />
              ))}
            </div>
          )}
        </main>
      )}

      {/* DISH DETAIL BOTTOM SHEET MODAL */}
      <DishDetailModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
        isFavorite={selectedDish ? favorites.includes(selectedDish.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* FLOATING REVIEW FUNNEL BUTTON */}
      <ReviewFunnel />

      {/* FIXED BOTTOM NAVIGATION (4 TABS ONLY - NO CART, NO PROFILE) */}
      <BottomNav
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
        favoritesCount={favorites.length}
      />

      {/* ADMIN PANEL MODAL */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        expiryDate={expiryDate}
        onUpdateExpiry={handleUpdateExpiry}
      />

      {/* SUBSCRIPTION LOCK OVERLAY */}
      <SubscriptionLock
        isLocked={isLocked}
        onOpenAdminPin={() => setIsAdminOpen(true)}
      />
    </div>
  );
}
