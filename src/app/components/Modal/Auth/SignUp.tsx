import React from "react";
import { Text, Flex, Input, Button, Stack } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { AuthModalState } from "@/atoms/AuthModalAtom";
const SignUp = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  return (
    <Stack>
      <form action="">
        <Input
          name="usernamessssssssssss"
          placeholder="Email"
          type="text"
          borderRadius={"30px"}
          mb="10px"
          bg={"#EDEFF1"}
          _focus={{ borderColor: "red", borderWidth: "0px", outline: "none" }}
          required
          height={"50px"}
        />

        <Button
          width={"100%"}
          bg="#ff4500"
          my="30px"
          _hover={{ background: "#D93A00" }}
          disabled={true}
        >
          Continue
        </Button>
      </form>
      <Text fontSize={"16px"}>
        Already a redditor
        <span
          style={{
            textDecoration: "underline",
            color: "#0079D3",
            fontWeight: "bolder",
            cursor: "pointer",
          }}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              View: "login",
            }))
          }
        >
            log In
        </span>
      </Text>
    </Stack>
  );
};

export default SignUp;
