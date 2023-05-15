import React, { useState } from "react";
import { Input, Button, Text, Stack ,Box, InputGroup, InputRightElement} from "@chakra-ui/react";
import { AuthModalState } from "@/atoms/AuthModalAtom";
import { useSetRecoilState } from "recoil";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
import { CheckIcon } from "@chakra-ui/icons";
const Login = () => {
  const validateSchema = yup.object().shape({
    username: yup
      .string()
      .min(3)
      .max(20)
      .required("Username must be between 3 and 20 characters"),
  });
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    values,
    touched,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      username: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validateSchema,
  });
  const setAuthModalState = useSetRecoilState(AuthModalState);
  return (
    <Stack>
      <Text fontSize={"20px"} mb="5px" fontWeight={600}>
        Login
      </Text>
      <Text fontSize={"13px"} mb="20px">
        By continuing, you are setting up a Reddit account and agree to our User
        Agreement and Privacy Policy.
      </Text>
      <form onSubmit={handleSubmit}>
        <Box width={"100%"}>
          <InputGroup>
            <input
              type="text"
              name="username"
              style={{
                background: "#EDEFF1",
                height: "50px",
                width: "300px",
                borderRadius: "20px",
                outline: "none",
                padding: "0px 10px",
                borderColor: `${
                  errors.username && touched.username ? "red" : ""
                }`,
                borderWidth: "2px",
              }}
              placeholder="Email"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {isValid && dirty && touched && (
              <InputRightElement>
                <CheckIcon color="green.500" />
              </InputRightElement>
            )}
          </InputGroup>
          {errors.username && touched.username && (
            <Text
              color="red"
              fontSize={"12px"}
              display={"flex"}
              alignItems={"center"}
            >
              {errors.username}
            </Text>
          )}
        </Box>
        <Input
          name="password"
          placeholder="Password"
          type="password"
          borderRadius={"30px"}
          _focus={{ borderColor: "red", borderWidth: "0px", outline: "none" }}
          required
          height={"50px"}
          mt="15px"
        />

        <Text fontSize={"13px"} pt="20px">
          Forgot your{" "}
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
                View: "resetusername",
              }))
            }
          >
            username
          </span>{" "}
          or{" "}
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
                View: "resetpassword",
              }))
            }
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
