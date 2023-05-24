import ShoppingCartContext from "@/components/context/cartContext";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState({});
  return (
    <ShoppingCartContext.Provider value={{ items, setItems }}>
      <Navbar />
      <div className="w-9/12 m-auto pt-10">
        <Component {...pageProps} />
      </div>
    </ShoppingCartContext.Provider>
  );
}
