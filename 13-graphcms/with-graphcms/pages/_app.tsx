import "@/styles/globals.css";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Flex w="full" minH="100vh" bgColor={"gray.100"}>
        <Box maxW={"70vw"} m="auto">
          <Component {...pageProps} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
