import ProductCard from "@/components/ProductCard";
import { NextPage } from "next";
import products from "../data/itmes";

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Home;
