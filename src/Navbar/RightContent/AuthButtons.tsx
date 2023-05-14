import React from 'react'
import {Button,Flex} from "@chakra-ui/react"
import { AuthModalState } from '@/atoms/AuthModalAtom';
import {useSetRecoilState} from "recoil"
const AuthButtons: React.FC = () => {
    const setAuthModalState = useSetRecoilState(AuthModalState)
  return (
    <Flex display={{ base: "none", md: "unset" }}>
      <Button
        padding={"0px 40px"}
        mr="15px"
        py={0}
        px={"40px"}
        height={"35px"}
        bg="#030303"
        _hover={{ backgroundColor: "none" }}
        onClick={() => setAuthModalState({ open: true, View: "signup" })}
      >
        Get App
      </Button>
      <Button
        bg="#ff4500"
        _hover={{ backgroundColor: "none" }}
        py={0}
        height={"35px"}
        px={"40px"}
        onClick={() => setAuthModalState({ open: true, View: "login" })}
      >
        Log In
      </Button>
    </Flex>
  );
}

export default AuthButtons