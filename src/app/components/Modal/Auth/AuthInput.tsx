import React from "react";
import { Flex } from "@chakra-ui/react";
import { AuthModalState } from "@/atoms/AuthModalAtom";
import { useRecoilValue } from "recoil";
import Login from "./Login";
import SignUp from "./SignUp";
import ResetUsername from "./ResetUsername";
import ForgotPassword from "./ForgotPassword";
const AuthInput = () => {
  const modalState = useRecoilValue(AuthModalState);
  return (
    <Flex>
      {modalState.View === "login" && <Login />}
      {modalState.View === "signup" && <SignUp />}
      {modalState.View === "resetusername" && <ResetUsername />}
      {modalState.View === "resetpassword" && <ForgotPassword/>}
    </Flex>
  );
};

export default AuthInput;
