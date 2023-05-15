import React from 'react'
import {
  Box,
  Button,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
import { CheckIcon } from "@chakra-ui/icons";
import { AuthModalState } from "@/atoms/AuthModalAtom";
import { useSetRecoilState } from "recoil";
const ForgotPassword = () => {
    const setAuthModalState = useSetRecoilState(AuthModalState);
    const validateSchema = yup.object().shape({
      email: yup
        .string()
        .email("Not a valid email address")
        .required("Please enter an email address to continue"),
      username: yup
        .string()
        .min(3)
        .max(20)
        .required("Username must be between 3 and 20 characters"),
    });
    const {
      handleBlur,
      handleChange,
      isSubmitting,
      handleSubmit,
      errors,
      values,
      touched,
      isValid,
      dirty,
    } = useFormik({
      initialValues: {
        email: "",
        username: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: validateSchema,
    });
  return (
    <Stack>
      <Text fontSize={"20px"} mb="5px" fontWeight={600}>
        Recover your password
      </Text>
      <Text fontSize={"13px"} mb="20px">
        Tell us the username and email address associated with your Reddit
        account, and we’ll send you an email with a link to reset your password.
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
              placeholder="Username"
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
        <Box width={"100%"} mt="15px">
          <InputGroup>
            <input
              type="text"
              name="email"
              style={{
                background: "#EDEFF1",
                height: "50px",
                width: "300px",
                borderRadius: "20px",
                outline: "none",
                padding: "0px 10px",
                borderColor: `${errors.email && touched.email ? "red" : ""}`,
                borderWidth: "2px",
              }}
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {isValid && dirty && touched && (
              <InputRightElement>
                <CheckIcon color="green.500" />
              </InputRightElement>
            )}
          </InputGroup>
          {errors.email && touched.email && (
            <Text
              color="red"
              fontSize={"12px"}
              display={"flex"}
              alignItems={"center"}
            >
              {errors.email}
            </Text>
          )}
        </Box>
        <Text fontSize={"13px"} mt="15px">
          Forget your 
        <span
          style={{
            textDecoration: "underline",
            color: "#0079D3",
            fontWeight: "bolder",
              cursor: "pointer",
            marginLeft: "5px"
          }}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              View: "resetusername",
            }))
          }
        >
        Username
          </span>
          </Text>
        <button
          style={{
            width: "100%",
            background: "#ff4500",
            opacity: `${isValid && dirty ? "1" : "0.3"}`,
            marginTop: "15px",
            height: "40px",
            borderRadius: "20px",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
          }}
          disabled={!(isValid && dirty)}
        >
         Reset Password
        </button>
      </form>
      <Text fontSize={"13px"}>
        Don't have an email or need assistance logging in? Get Help
      </Text>
      <Text fontSize={"13px"}>
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
        <span
          style={{ marginRight: "5px", marginLeft: "5px", color: "#0079d3" }}
        >
          &bull;
        </span>
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
          Log In
        </span>
      </Text>
    </Stack>
  );
}

export default ForgotPassword