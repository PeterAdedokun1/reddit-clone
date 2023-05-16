import React from "react";
import { Flex, Image, Box } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";
const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex
      bg="white"
      height={"50px"}
      padding="6px 20px"
      justify={"space-between"}
      // width={"100%"}
      // maxW={"100%"}
      align={"center"}
    >
      <Flex align={"center"} >
        <Image src="./images/redditFace.svg" height={"30px"} />
        <Image
          src="./images/redditText.svg"
          height={"46px"}
          display={{ base: "none", md: "unset " }}
        />
      </Flex>
      {/* <Directory /> */}
      <Box >
        <SearchInput />
      </Box>

      <Box >
        <RightContent user={user} />
      </Box>
    </Flex>
  );
};

export default Navbar;
