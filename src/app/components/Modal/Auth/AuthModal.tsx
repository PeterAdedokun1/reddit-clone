import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import { AuthModalState } from "@/atoms/AuthModalAtom";
import { useRecoilState } from "recoil";
import AuthInput from "./AuthInput";
import OAuthButton from "./OAuthButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase/clientApp"
const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(AuthModalState);
  const [ user,loading, error] = useAuthState(auth)
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };
  useEffect(() => {
    if (user) handleClose();
    console.log("user", user)
  },[user])
  return (
    <>
      <Modal
        isOpen={modalState.open}
        onClose={handleClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent maxW={"450px"} mx="auto" borderRadius={"10px"}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody my="30px" mx={"50px"}>
            <Flex direction={"column"} align={"center"} justify={"center"}>
              {/* <OAuthButton /> */}

              <AuthInput />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
