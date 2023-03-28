import { CardData } from "@/types/types";
import Image from "next/image";

const ProductCard: React.FC<CardData> = ({ id, name, price, picture }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-md">
      <div className="relative 100% h-40 m-auto">
        <Image
          src={picture}
          alt={name}
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
      <div className="flex justify-between mt-4">
        <div className="font-bold text-l">{name}</div>
        <div className="font-bold text-l text-gray-500">${price}</div>
      </div>
      <div className="flex justify-between mt-4 w-2/4 m-auto">
        <button
          className="pl-2 pr-2 bg-red-400 text-white rounded-md"
          disabled={false}
          onClick={() => {}}
        >
          -
        </button>
        <div></div>
        <button
          className="pl-2 pr-2 bg-green-400 text-white rounded-md"
          onClick={() => {}}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
