import {
  Box,
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
type CreateCommunityModalProps = {
  open: boolean;
  handleClose: () => void;
};
const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleClose,
}) => {

  const [communityName, setCommunityName] = useState("");
  const [charsRemaining, setCharsRemaining] = useState(21);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //recalculate
    if (e.target.value.length > 21) return;
    setCommunityName(e.target.value);
    setCharsRemaining(21 - e.target.value.length)
}
  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display={"flex"}
            flexDirection={"column"}
            fontSize={15}
            padding={3}
          >
            Create a Community
          </ModalHeader>
          <Box pl={2} pr={2}>
            <Divider />
            <ModalCloseButton />
            <ModalBody
              display={"flex"}
              flexDirection={"column"}
              padding={"10px 0px"}
            >
              <Text fontWeight={600} fontSize={15}>
                {" "}
                Name
              </Text>
              <Text fontSize={11} color={"gray.500"}>
                Community names including capitalization cannot be changed
              </Text>
              <Text
                position={"relative"}
                top={"28px"}
                left={"10px"}
                width={"20px"}
                color={"gray.400"}
              >
                r/
              </Text>
              <Input
                position={"relative"}
                value={communityName}
                size={"sm"}
                pl={"22px"}
                onChange={ handleChange}
              />
              <Text color={charsRemaining === 0 ? "red" : "gray.500"} fontSize={"9pt"} mt="10px">{charsRemaining}   Chracters remaining</Text>
              <Box></Box>
            </ModalBody>
          </Box>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button variant="ghost"> Create Community</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateCommunityModal;
