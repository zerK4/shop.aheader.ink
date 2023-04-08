export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
  address: Address[];
  orders: Order[];
  reviews: Review[];
}

export interface Address {
  id: number;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  user: User;
  userId: number;
  order: Order[];
}

export interface Product {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  image: string;
  category: Category;
  categoryId: number;
  attributes: Attribute[];
  reviews: Review[];
  orders: Order[];
  createdAt: Date;
  updatedAt: Date;
  subCategory?: SubCategory | null;
  subCategoryId?: number | null;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
  subCategories: SubCategory[];
}

export interface SubCategory {
  id: number;
  name: string;
  products: Product[];
  Category?: Category;
  categoryId?: number | null;
}

export interface Attribute {
  id: number;
  name: string;
  value: string;
  product: Product;
  productId: number;
}

export interface Review {
  id: number;
  title: string;
  body: string;
  rating: number;
  product: Product;
  user: User;
  productId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: number;
  user: User;
  address: Address[];
  products: Product[];
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Currency {
  id: number;
  name: string;
  value: string;
}

export interface Role {
  ADMIN: 'ADMIN';
  USER: 'USER';
}
