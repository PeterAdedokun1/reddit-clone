import React, { useState } from "react";
import { Text, Flex, Input, Button, Stack } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { AuthModalState } from "@/atoms/AuthModalAtom";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
// const formik = usefor
// import { object, string, number, date, InferType } from "yup";
const SignUp = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);

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
        // values.preventDefault()
        console.log(values);
      },
      validationSchema: validateSchema,
    });


  return (
    <Stack>
      <form onSubmit={handleSubmit} autoComplete="off" style={{width: "100%"}}>
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
            borderColor: `${errors.email  ? "red" : ""}`,
            borderWidth: "2px"
          }}
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {
          errors.email && <Text color={"red"}>{errors.email }</Text>
}
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
          disabled={!(isValid && dirty) }
        >
          continue
        </button>
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
// {
/* <Input
          as={"input"}
          // name="name"
          name="email"
          placeholder="Email"
          type="text"
          borderRadius={"30px"}
          bg={"#EDEFF1"}
          // _focus={{ borderColor: "red", borderWidth: "0px", outline: "none" }}
          // required
          // focusBorderColor="lime"
          height={"50px"}
          width={"100%"}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          borderWidth={"1px"}
          // borderColor={"red"}
          // focusBorderColor="blue"
          // focusBorderColor="red"
          focusBorderColor={
            errors && touched ? "red.300" : "lime"
          }
        /> */
// }
