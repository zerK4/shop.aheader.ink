import { Category } from '@/types/defaultTypes';
import axios from 'axios';
import { create } from 'zustand';

export interface GlobalState {
  loading: boolean | any;
  categories: Category[] | any;
  getCategories: () => Promise<void> | any;
}

const globalState = create<GlobalState>((set) => ({
  loading: false,
  categories: [],
  getCategories: async () => {
    set(() => ({
      loading: true,
    }));
    const { data } = await axios({
      method: 'GET',
      url: '/api/categories',
    });

    set(() => ({
      loading: false,
      categories: data.categories,
    }));
  },
}));

export default globalState;
