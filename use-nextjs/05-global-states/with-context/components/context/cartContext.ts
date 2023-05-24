import { CardData } from "@/types/types";
import { createContext } from "react";

interface ShoppingCartContextState {
  items: { [key: string]: number };
  setItems: (value: { [key: string]: number }) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextState>({
  items: {},
  setItems: () => undefined,
});

export default ShoppingCartContext;
