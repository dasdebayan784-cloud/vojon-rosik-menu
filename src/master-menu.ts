import { MASTER_MENU as JS_MASTER_MENU } from '../master-menu.js';

export interface MenuItem {
  id: string;
  name: string;
  nameEnglish: string;
  price: number;
  veg: boolean;
  popularity: 'high' | 'medium' | 'low';
  tags: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  nameEnglish: string;
  icon: string;
  items: MenuItem[];
}

export interface RestaurantInfo {
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

export interface MasterMenu {
  restaurant: RestaurantInfo;
  categories: MenuCategory[];
}

export const MASTER_MENU: MasterMenu = JS_MASTER_MENU as MasterMenu;
