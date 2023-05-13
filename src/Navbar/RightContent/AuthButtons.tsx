import React from 'react'
import {Button,Flex} from "@chakra-ui/react"
const AuthButtons:React.FC = () => {
  return (
    <Flex display={{ base: "none", md: "unset" }} gap={"20px"}>
      <Button bg="#0F1A1C" padding={"0px 40px"} mr="20px">
        Get App
      </Button>
      <Button
        bg="#ff4500"
        _hover={{ backgroundColor: "none" }}
        padding={"0px 40px"}
      >
        Log In
      </Button>
    </Flex>
  );
}

export default AuthButtons