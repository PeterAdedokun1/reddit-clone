import React, { useState } from "react";
import { Input, Button, Text, Stack } from "@chakra-ui/react";
import { AuthModalState } from "@/atoms/AuthModalAtom";
import { useSetRecoilState } from "recoil";
const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const setAuthModalState = useSetRecoilState(AuthModalState);
  return (
    <Stack>
      <form action="">
        <Input
          name="username"
          placeholder="Username"
          type="text"
          borderRadius={"30px"}
          // mb="5px"
          bg={"#EDEFF1"}
          _focus={{ borderColor: "red", borderWidth: "0px", outline: "none" }}
          onChange={onChange}
          required
          height={"50px"}
          maxLength={20}
        />
        {loginForm.username.length < 3 && (
          <span style={{ color: "red", fontSize: "14px", marginLeft: "20px" }}>
            Username must be between 3 and 20 characters
          </span>
        )}

        <Input
          name="password"
          placeholder="Password"
          type="password"
          borderRadius={"30px"}
          _focus={{ borderColor: "red", borderWidth: "0px", outline: "none" }}
          onChange={onChange}
          required
          height={"50px"}
          mt="15px"
          // bg={`${loginForm.password === "" ?"#EDEFF1" : "#E8FOFE" }`}
          // bg={`${loginForm.password === "" ? "#EDEFF1" : "red"}`}
        />
    

        <Text fontSize={"16px"} pt="20px">
          Forgot your{" "}
          <span
            style={{
              textDecoration: "underline",
              color: "#0079D3",
              fontWeight: "bolder",
            }}
          >
            username
          </span>{" "}
          or{" "}
          <span
            style={{
              textDecoration: "underline",
              color: "#0079D3",
              fontWeight: "bolder",
            }}
          >
            password
          </span>
          ?
        </Text>
        <Button
          width={"100%"}
          bg="#ff4500"
          my="30px"
          _hover={{ background: "#ff4500" }}
        >
          Login
        </Button>
      </form>
      <Text fontSize={"16px"}>
        New to Reddit{" "}
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
              View: "signup",
            }))
          }
        >
          Sign up
        </span>
      </Text>
    </Stack>
  );
};

export default Login;
