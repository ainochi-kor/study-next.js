export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: {
    id: string;
    url: string;
  }[];
}
