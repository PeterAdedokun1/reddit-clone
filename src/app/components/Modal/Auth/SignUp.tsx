import React, { useState } from "react";
import { Text,  Input,  Stack } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { AuthModalState } from "@/atoms/AuthModalAtom";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
const SignUp = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const [stepCount, SetStepCount] = useState(0)
  const validateSchema = yup.object().shape({
    email: yup
      .string()
      .email("Not a valid email address")
      .required("Please enter an email address to continue"),
  });

  const { handleBlur, handleChange, isSubmitting ,  handleSubmit, errors, values, touched , isValid ,dirty} =
    useFormik({
      initialValues: {
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: validateSchema,
    });


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
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            style={{ width: "100%" }}
          >
            <input
              type="text"
              name="email"
              style={{
                background: "#EDEFF1",
                height: "50px",
                width: "100%",
                borderRadius: "20px",
                outline: "none",
                padding: "10px 50px",
                borderColor: `${errors.email ? "red" : ""}`,
                borderWidth: "2px",
              }}
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <Text color={"red"} fontSize={"12px"}>{errors.email}</Text>}
            {isValid && dirty && <Text fontSize={"12px"}>This is valid</Text>}
            <button
              style={{
                width: "100%",
                background: `${isValid && dirty ? "red" : "blue"}`,
                marginTop: "30px",
                marginBottom: "30px",
                height: "40px",
                borderRadius: "20px",
                color: "white",
                fontSize: "20px",
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
          <Text>
            Reddit is anonymous, so your username is what you’ll go by here.
            Choose wisely—because once you get a name, you can’t change it.
          </Text>
          <input
            type="text"
            name="username"
            style={{
              background: "#EDEFF1",
              height: "50px",
              width: "100%",
              borderRadius: "20px",
              outline: "none",
              padding: "10px 50px",
              // borderColor: `${
              //   errors.username && touched.username ? "red" : ""
              // }`,
              borderWidth: "2px",
            }}
            placeholder="Email"
            // value={values.username}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
          <Stack pt="20px">
            <Input
              name="password"
              placeholder="Password"
              type="password"
              borderRadius={"30px"}
              _focus={{
                borderColor: "red",
                borderWidth: "0px",
                outline: "none",
              }}
              required
              height={"50px"}
            />
          </Stack>
          <button
            style={{
              width: "100%",
              background: `${isValid && dirty ? "red" : "blue"}`,
              marginTop: "30px",
              marginBottom: "30px",
              height: "40px",
              borderRadius: "20px",
              color: "white",
              fontSize: "20px",
            }}
            // disabled={isSubmitting}
            // disabled={!(isValid && dirty)}
            // onClick={() => SetStepCount(stepCount + 1)}
          >
            continue
          </button>
        </Stack>
      )}
    </>
  );
};

export default SignUp;

