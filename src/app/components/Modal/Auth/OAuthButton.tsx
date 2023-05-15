import { Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const OAuthButton = () => {
  return (
    <Flex>
      <Button fontWeight={"medium"} width={"300px"} variant={"outline"}>
        <Image objectFit={"contain"} src="./images/googlelogo.png" height={"20px"} mr={"50px"} p={0} />
        Continue with Google
      </Button>
    </Flex>
  );
}

export default OAuthButton