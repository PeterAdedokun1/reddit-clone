import React, { useState } from "react";
import { Input, Button, Text, Stack } from "@chakra-ui/react";
const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm(prev => ({
            ...prev,
            [event.target.name] : event.target.value
       }))
    }
  return (
    <Stack>
      <form action="">
        <Input
          name="username"
          placeholder="Username"
          type="text"
          borderRadius={"30px"}
          mb="10px"
          bg={"#EDEFF1"}
          _focus={{ borderColor: "red", borderWidth: "0px", outline: "none" }}
          onChange={onChange}
        />
        <Input
          name="password"
          placeholder="password"
          type="email"
          borderRadius={"30px"}
          _focus={{ borderColor: "red", borderWidth: "0px", outline: "none" }}
          onChange={onChange}
        />
        <Text fontSize={"13px"} pt="20px">
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
      <Text fontSize={"13px"}>
        New to Reddit{" "}
        <span
          style={{
            textDecoration: "underline",
            color: "#0079D3",
            fontWeight: "bolder",
          }}
        >
          Sign up
        </span>
      </Text>
    </Stack>
  );
};

export default Login;
