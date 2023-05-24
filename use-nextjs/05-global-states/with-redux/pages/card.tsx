import { CardData } from "@/types/types";
import { NextPage } from "next";
import { shallowEqual, useSelector } from "react-redux";
import data from "../data/itmes";

function useGlobalItems() {
  return useSelector((state) => state, shallowEqual) as {
    [key: string]: number;
  };
}

function getFullItem(id: string) {
  const idx = data.findIndex((item) => item.id === id);
  return data[idx];
}

const Cart: NextPage = () => {
  const items = useGlobalItems();
  const total = Object.keys(items)
    .map((id) => getFullItem(id).price * items[id])
    .reduce((x, y) => x + y, 0);

  const amounts = Object.keys(items).map((id) => {
    const item = getFullItem(id);
    return { item, amount: items[id] };
  });

  return (
    <div>
      <h1 className="text-xl font-bold"> Total: ${total} </h1>
      <div>
        {amounts.map(({ item, amount }) => (
          <div key={item.id}>
            x{amount} {item.name} (${amount * item.price})
          </div>
        ))}
      </div>
    </div>
  );
};
