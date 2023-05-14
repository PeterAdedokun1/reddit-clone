import React, { useState } from "react";
import { Text, Flex, Input, Button, Stack,} from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { AuthModalState } from "@/atoms/AuthModalAtom";
import * as Yup from "yup";
const SignUp = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required").email("Invalid email"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const createUser = (e: any) => {
    e.preventDefault();
    let formData = {
      email: e.target[0].value,
    };
    console.log(formData);
  };

  return (
    <Stack>
      <form onSubmit={createUser}>
        <Input
          name="name"
          placeholder="Email"
          type="text"
          borderRadius={"30px"}
          bg={"#EDEFF1"}
          _focus={{ borderColor: "red", borderWidth: "0px", outline: "none" }}
          // required
          height={"50px"}
          width={"100%"}
        />
      

    
        <button style={{width: "100%", background: "#ff4500", marginTop: "30px", marginBottom: "30px", height: "40px", borderRadius: "20px", color: "white", fontSize: "20px"}}>continue</button>
      </form>
      <Text fontSize={"16px"}>
        Already a redditor
        <span
          style={{
            textDecoration: "underline",
            color: "#0079D3",
            fontWeight: "bolder",
            cursor: "pointer",
            paddingLeft: "5px",
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
