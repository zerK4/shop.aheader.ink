import { Attribute } from '@/types/defaultTypes';
import { create } from 'zustand';

export interface AdminStore {
  [key: string]: any;
  loading: boolean;
  attrSidebar: boolean;
  attributes: Attribute[];
  dropDown: boolean | any;
  dropDownId: number | any;
  selectedCategory: any;
  selectedSubcategory: any;
}

const adminStore = create<AdminStore>((set) => ({
  loading: false,
  attrSidebar: false,
  attributes: [],
  dropDown: false,
  dropDownId: 0,
  selectedCategory: null,
  selectedSubcategory: null,
}));

export default adminStore;
