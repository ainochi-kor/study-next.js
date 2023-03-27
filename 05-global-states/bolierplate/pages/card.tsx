import { CardData } from "@/types/types";
import { NextPage } from "next";

const Cart: NextPage = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Total: $</h1>
      <div>
        {/* {[].map(({ item, amount }) => (
          <div key={item.id}>
            x{amount} {item.name} (${amount * item.price})
          </div>
        ))} */}
      </div>
    </div>
  );
};
