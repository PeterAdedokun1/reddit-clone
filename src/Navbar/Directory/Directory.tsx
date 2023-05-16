import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import React from "react";
import { auth } from "@/firebase/clientApp";
import { useSetRecoilState } from "recoil";
import AuthModal from "@/app/components/Modal/Auth/AuthModal";
import { AuthModalState } from "@/atoms/AuthModalAtom";
import { TiHome } from "react-icons/ti";
type UserMenu = {
  user?: User | null;
};

const Directory: React.FC<UserMenu> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  return (
    <Menu>
      <MenuButton
        cursor={"pointer"}
        borderRadius={4}
        _hover={{ outline: "1px solid ", outlineColor: "gray.200" }}
        w={"250px"}
        ml="20px"
        mr="20px"
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignContent={"center"}
          width={"100%"}
        >
          <Flex align={"center"}>
            <Icon as={TiHome} fontSize={"30px"} />
            <Text mt="3px" ml="5px" fontWeight={"semibold"} fontSize={"13px"}>
              Home
            </Text>
          </Flex>
          <Box fontSize={"20px"}>
            <ChevronDownIcon />
          </Box>
        </Box>
      </MenuButton>
      <MenuList>asdfasfasd</MenuList>
    </Menu>
  );
};

export default Directory;
{
  /* <Stack>
  <Flex align={"center"}>
    <Flex align={"center"}>
      <Icon as={TiHome} />
      <Text>Home</Text>
    </Flex>
  </Flex>
</Stack>; */
}
