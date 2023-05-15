import { Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import {auth} from "../../../../firebase/clientApp"
const OAuthButton = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex>
      <Button fontWeight={"medium"} width={"300px"} variant={"outline"} isLoading={loading} onClick={() => signInWithGoogle()}>
        <Image objectFit={"contain"} src="./images/googlelogo.png" height={"20px"} mr={"50px"} p={0} />
        Continue with Google
      </Button>
    </Flex>
  );
}

export default OAuthButton