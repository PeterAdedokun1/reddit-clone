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
  Box,
} from "@chakra-ui/react";
import { AuthModalState } from "@/atoms/AuthModalAtom";
import { useRecoilState } from "recoil";
import AuthInput from "./AuthInput";
import OAuthButton from "./OAuthButton";
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
