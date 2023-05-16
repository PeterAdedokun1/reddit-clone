import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useSignInWithApple, useSignInWithGoogle } from "react-firebase-hooks/auth"
import {auth} from "../../../../firebase/clientApp"
const OAuthButton = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithApple, ] = useSignInWithApple(auth);
  return (
    <Stack>
      <Button
        fontWeight={"medium"}
        width={"300px"}
        variant={"outline"}
        isLoading={loading}
        display={"flex"}
        justifyContent={loading ? "center" : "flex-start"}
        onClick={() => signInWithGoogle()}
      >
        <Image
          objectFit={"contain"}
          src="./images/googlelogo.png"
          height={"20px"}
          p={0}
          mr={"50px"}
        />
        <Text>Continue with Google</Text>
      </Button>
      {/* <Button
        fontWeight={"medium"}
        width={"300px"}
        variant={"outline"}
        isLoading={loading}
        display={"flex"}
        justifyContent={loading ? "center" : "flex-start"}
        onClick={() => signInWithApple()}
      >
        <Image
          objectFit={"contain"}
          src="./images/googlelogo.png"
          height={"20px"}
          p={0}
          mr={"50px"}
        />
        <Text>Continue with with apple</Text>
      </Button> */}
    </Stack>
  );
}

export default OAuthButton
