import TopBar from "@/components/TopBar";
import { ChakraProvider, Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <TopBar />
      <Box maxW="container.xl" margin="auto">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
