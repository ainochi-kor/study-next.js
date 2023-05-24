import { Product } from "@/types/api/products";
import { gql } from "graphql-request";

export interface AllProducts {
  products: Product[];
}

const getAllProducts = gql`
  query GetAllProducs {
    products {
      id
      name
      slug
      price
      images {
        id
        url
      }
    }
  }
`;

export default getAllProducts;
