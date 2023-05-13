import React,{ReactNode} from 'react'
import Navbar from '@/Navbar/Navbar'
import {Stack,Box} from "@chakra-ui/react"
interface Props {
  children?: ReactNode;
}
const Layout = ({children}: Props) => {
  return (
    <Box >
      <Navbar />
      <main>{children}</main>
    </Box>
  );
}

export default Layout