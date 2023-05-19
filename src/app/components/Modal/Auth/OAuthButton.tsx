import { Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  useSignInWithApple,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase/clientApp";
import { User } from "firebase/auth";
import { Firestore, doc, setDoc } from "firebase/firestore";
import { fireStore } from "../../../../firebase/clientApp";
const OAuthButton = () => {
  const [signInWithGoogle, userCred, loading, error] =
    useSignInWithGoogle(auth);
  const [signInWithApple] = useSignInWithApple(auth);

  const createUserDocument = async (user: User) => {
    const userDocRef = doc(fireStore, "users", user.uid);
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
  };
  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred]);
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
};

export default OAuthButton;
