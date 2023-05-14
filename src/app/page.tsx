"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakra/theme";
import Layout from "./components/Layout/Layout";
import { RecoilRoot } from "recoil";
import "./components/app.css"
export default function Home() {
  return (
    <RecoilRoot>
      {" "}
      <ChakraProvider theme={theme}>
        <Layout>ksksksk</Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
