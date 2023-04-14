import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetStaticProps, NextPage } from "next";
import getAllProducts, {
  AllProducts,
} from "@/lib/graphql/queries/getAllProducts";
import graphql from "@/lib/graphql";
import { Grid } from "@chakra-ui/react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/api/products";

interface P {
  products: Product[];
}

const Home: NextPage<P> = ({ products }) => {
  return (
    <Grid gridTemplateColumns="repeat(4, 1fr)" gap="5">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { products } = await graphql.request<AllProducts>(getAllProducts);
  return {
    revalidate: 60,
    props: {
      products,
    },
  };
};
