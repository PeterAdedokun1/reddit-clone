import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { AuthModalState } from "@/atoms/AuthModalAtom";
import {useRecoilState} from "recoil"
const AuthModal: React.FC = () => {
    const [modalState, setModalState] = useRecoilState(AuthModalState)
    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false
        }))
    }
  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose} >
        <ModalOverlay />
        <ModalContent>  
                  <ModalHeader>
                      {modalState.View === "login" && "Login"}
                      {modalState.View === "signup" && "SignUp"}
                      {modalState.View === "resetusername" && "Recover your username"}
                      {modalState.View === "resetpassword" && "Reser your password"}

                  </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Here is the modal boyd
          </ModalBody>

    
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
