import React, { useState } from "react";
import {
  Text,
  Input,
  Stack,
  Box,
  InputGroup,
  InputRightElement,
  Button,
  Image,
} from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { AuthModalState } from "@/atoms/AuthModalAtom";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
import { CheckIcon } from "@chakra-ui/icons";
import OAuthButton from "./OAuthButton";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import {
  Auth,
  AuthError,
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
  sendEmailVerification,
  UserCredential,
} from "firebase/auth";
import { auth } from "@/firebase/clientApp";
const SignUp = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const [stepCount, SetStepCount] = useState(0);
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

  

  const [user, createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const onSubmit = () => {
  };
  return (
    <>
      {stepCount === 0 && (
        <Stack>
          <Text fontSize={"20px"} mb="5px" fontWeight={600}>
            Sign Up
          </Text>
          <Text fontSize={"13px"} mb="20px">
            By continuing, you are setting up a Reddit account and agree to our
            User Agreement and Privacy Policy.
          </Text>
          <OAuthButton />
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            style={{ width: "100%" }}
          >
            <Box width={"100%"}>
              <InputGroup>
                <input
                  type="text"
                  name="email"
                  style={{
                    background: "#EDEFF1",
                    height: "50px",
                    borderRadius: "20px",
                    outline: "none",
                    width: "300px",
                    padding: "0px 10px",
                    borderColor: `${errors.email ? "red" : ""}`,
                    borderWidth: "2px",
                  }}
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {isValid && dirty && (
                  <InputRightElement>
                    <CheckIcon color="green.500" />
                  </InputRightElement>
                )}
              </InputGroup>
            </Box>
            {errors.email && (
              <Text
                color={"red"}
                fontSize={"12px"}
                display={"flex"}
                alignItems={"center"}
              >
                {errors.email}
              </Text>
            )}
            <button
              style={{
                width: "100%",
                background: "#ff4500",
                opacity: `${isValid && dirty ? "1" : "0.3"}`,
                marginTop: "30px",
                marginBottom: "30px",
                height: "40px",
                borderRadius: "20px",
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
              }}
              // disabled={isSubmitting}
              disabled={!(isValid && dirty)}
              onClick={() => SetStepCount(stepCount + 1)}
            >
              continue
            </button>
          </form>
          <Text fontSize={"13px"}>
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
      )}
      {stepCount === 1 && (
        <Stack>
          <Text fontSize={"20px"} mb="5px" fontWeight={600}>
            Create your username and password
          </Text>
          <Text fontSize={"13px"}>
            Reddit is anonymous, so your username is what you’ll go by here.
            Choose wisely—because once you get a name, you can’t change it.
          </Text>
          <Box width={"100%"} pt="10px">
            <input
              type="text"
              name="Username"
              style={{
                background: "#EDEFF1",
                height: "50px",
                width: "300px",
                borderRadius: "20px",
                outline: "none",
                padding: "0px 10px",

                borderWidth: "2px",
              }}
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
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
          <Stack>
            <input
              name="password"
              placeholder="Password"
              type="password"
              style={{
                background: "#EDEFF1",
                height: "50px",
                width: "300px",
                borderRadius: "20px",
                outline: "none",
                padding: "0px 10px",

                borderWidth: "2px",
              }}
              required
              height={"50px"}
            />
          </Stack>
          <button
            style={{
              width: "100%",
              background: "#ff4500",
              opacity: `${isValid && dirty ? "1" : "0.3"}`,
              marginTop: "30px",
              marginBottom: "30px",
              height: "40px",
              borderRadius: "20px",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
            }}
            // disabled={isSubmitting}
            disabled={!(isValid && dirty)}
            onClick={() => SetStepCount(stepCount + 1)}
          >
            continue
          </button>
        </Stack>
      )}
    </>
  );
};

export default SignUp;
