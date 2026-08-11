export type ScreenName = 'home' | 'menu' | 'offers' | 'fav';
export type FilterType = 'All' | 'Veg' | 'Non-Veg';

export interface MenuItemData {
  id: string;
  name: string;
  nameEnglish: string;
  price: number;
  veg: boolean;
  popularity: 'high' | 'medium' | 'low';
  tags: string[];
}

export interface MenuCategoryData {
  id: string;
  name: string;
  nameEnglish: string;
  icon: string;
  items: MenuItemData[];
}

export interface RestaurantData {
  id: string;
  name: string;
  nameEnglish: string;
  tagline: string;
  address: string;
  phone: string;
  website: string;
  gstin: string;
  google_review_url: string;
  delivery_partners: string[];
  timing: string;
  notes: string;
}

export interface MasterMenuData {
  restaurant: RestaurantData;
  categories: MenuCategoryData[];
}

export interface FeedbackItem {
  key: string;
  rating: 'okay' | 'bad' | string;
  text: string;
  timestamp: string;
}

export interface AppState {
  currentScreen: ScreenName;
  currentCategory: string | null;
  activeFilter: FilterType;
  openDishId: string | null;
  searchQuery: string;
  isLocked: boolean;
  expiryDate: string | null;
  isAdminOpen: boolean;
  isAdminAuthenticated: boolean;
  feedbackRating: 'good' | 'okay' | 'bad' | null;
  favorites: string[];
}
