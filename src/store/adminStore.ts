import { create } from 'zustand';

export interface AdminStore {
  loading: boolean;
  attrSidebar: boolean;
}

const adminStore = create<AdminStore>((set) => ({
  loading: false,
  attrSidebar: false,
}));

export default adminStore;
