export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  address: Address[];
  orders: Order[];
  reviews: Review[];
}

export interface Address {
  id: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  user: User;
  userId: string;
  order: Order[];
}

export interface Product {
  id?: string;
  name: string;
  description?: string | null;
  price?: string;
  image?: string;
  category?: Category | null;
  stock: string;
  meta?: Meta[] | null;
  categoryId?: string;
  attributes?: Attribute[] | null;
  reviews?: Review[];
  orders?: Order[];
  createdAt?: Date;
  updatedAt?: Date;
  subCategory?: SubCategory | null;
  subCategoryId?: string | null;
}

export interface Category {
  id: string;
  name: string;
  products?: Product;
  subCategories: SubCategory;
}

export interface SubCategory {
  id: string;
  name: string;
  products: Product[];
  Category?: Category;
  categoryId?: string | null;
}

export interface Attribute {
  id?: string;
  name: string;
  value: string;
  product?: Product;
  productId?: string;
}

export interface Review {
  id: string;
  title: string;
  body: string;
  rating: string;
  product: Product;
  user: User;
  productId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  user: User;
  address: Address[];
  products: Product[];
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Currency {
  id: string;
  name: string;
  value: string;
}

export interface Role {
  ADMIN: 'ADMIN';
  USER: 'USER';
}

export interface Meta {
  meta: {
    id: string;
    title: string;
    name: string;
    content: string;
    product: Product;
    productId: string;
    category: Category;
    categoryId: string;
    subCategory: SubCategory;
    subCategoryId: string;
  };
}
