export type CardPostProps = {
  name: string,
  img: string,
  price: number,
  datePost: string
}
// casi dungf chinhs home,productDetail,product page
export type ProductType = {
  productId: number,
  seller: {
    userId: number;
    username: string;
    email: string;
    roles: string; // "CLIENT"
    phoneNumber: string;
    address: string;
    createdAt: [number, number, number, number, number, number]; // Year, Month, Day, Hour, Minute, Second
  };
  category: {
    categoryId: number,
    name: string,
    categoryID: number,
  },
  title: string,
  description: string,
  price: number,
  status: string,
  create_at: number,
  imageUrls: string[]
}

// Type for individual product
interface Product {
  productId: number;
  title: string;
  description: string;
  price: number;
  status: "AVAILABLE" | "SOLD_OUT" | "DISCONTINUED";
  create_at: number; // Timestamp in milliseconds
  imageUrls: string[];
}

// Type for the data containing product list
export interface ProductData {
  content: Product[];
}

// Type for the API response
export interface ProductResponse {
  code: number; // e.g., 200
  msg: string; // e.g., "success"
  data: ProductData;
}

export interface ProductDetailResponse {
  code: number; // e.g., 200
  msg: string; // e.g., "success"
  data: ProductType;
}
// Định nghĩa kiểu dữ liệu cho thông tin phân trang
interface Sort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}
export interface PaginatedProductsResponse {
  content: Product[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  first: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  empty: boolean;
}