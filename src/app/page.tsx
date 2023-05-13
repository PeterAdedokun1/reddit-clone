"use client";
import { ChakraProvider } from "@chakra-ui/react";
// import { Theme } from "@chakra-ui/react";
import { theme } from "./chakra/theme";
import Layout from "./components/Layout/Layout";
export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        ksksksk
      </Layout>
      </ChakraProvider>
     
  );
}
