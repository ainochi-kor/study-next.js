import { AllProducts } from "@/lib/graphql/queries/getAllProducts";
import { Product } from "@/types/api/products";
import { Box, Image, Divider, Text } from "@chakra-ui/react";
import Link from "next/link";

const ProductCard: React.FC<Product> = ({ slug, images, name, price }) => {
  return (
    <Link href={`/product/${slug}`} passHref>
      <Box
        border="1px"
        borderColor="gray.200"
        px="10"
        py="5"
        rounded="lg"
        boxShadow="lg"
        bgColor="white"
        transition="ease 0.2s"
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.02)",
        }}
      >
        <Image src={images[0]?.url} alt={name} />
        <Divider my="3" />
        <Box>
          <Text fontWeight="bold" textColor="purple" fontSize="lg">
            {name}
          </Text>
          <Text textColor="gray.700">€{price / 100}</Text>
        </Box>
      </Box>
    </Link>
  );
};

export default ProductCard;
