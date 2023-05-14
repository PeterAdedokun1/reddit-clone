import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
} from "@chakra-ui/react";
import { AuthModalState } from "@/atoms/AuthModalAtom";
import { useRecoilState } from "recoil";
import AuthInput from "./AuthInput";
const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(AuthModalState);
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };
  return (
    <>
      <Modal
        isOpen={modalState.open}
        onClose={handleClose}
        closeOnOverlayClick={false}
        
      >
        <ModalOverlay />
        <ModalContent maxW={"400px"} mx="auto" borderRadius={"10px"}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody my="30px">
            <Text fontSize={"20px"} mb="5px" fontWeight={600}>
              {modalState.View === "login" && "Log In"}
              {modalState.View === "resetusername" && "Recover your username"}
              {modalState.View === "resetpassword" && "Reser your password"}
            </Text>
            <Text fontSize={"13px"} mb="20px">
              {modalState.View === "login" &&
                "By continuing, you are setting up a Reddit account and agree to our User Agreement and Privacy Policy."}
             
              {modalState.View === "resetpassword" &&
                "Tell us the username and email address associated with your Reddit account, and we’ll send you an email with a link to reset your password."}
              {modalState.View === "resetusername" &&
                "Tell us the email address associated with your Reddit account, and we’ll send you an email with your username"}
            </Text>
            <Flex direction={"column"} align={"center"} justify={"center"}>
              {/* <OAuthButtons/> */}
              <AuthInput />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
