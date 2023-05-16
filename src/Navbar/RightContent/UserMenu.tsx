import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import React from "react";
import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import {MdOutlineLogin} from "react-icons/md"
import { auth } from "@/firebase/clientApp";
import { useSetRecoilState } from "recoil";
import AuthModal from "@/app/components/Modal/Auth/AuthModal";
import { AuthModalState } from "@/atoms/AuthModalAtom";
type UserMenu = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenu> = ({ user }) => {
    const setAuthModalState = useSetRecoilState(AuthModalState)
  return (
    <Menu>
      <MenuButton
        cursor={"pointer"}
        padding={"0px 6px"}
        borderRadius={4}
        _hover={{ outline: "1px solid ", outlineColor: "gray.200" }}
      >
        {user ? (
          <Flex align={"center"}>
            <Flex align="center">
              <>
                <Icon
                  as={FaRedditSquare}
                  fontSize={24}
                  mr="1"
                  color={"gray.300"}
                              />
                              <Flex direction={"column"} display={{ base: "none", lg: "flex" }} fontSize={"8pt"} align={"flex-start"} mr={8}>
                                  <Text fontWeight={700}>
                                      {user.displayName || user.email?.split("@")[0]}
                                  </Text>
                                  <Flex>
                                      <Icon as={IoSparkles} color={"brand.100"} mr={1} />
                                      <Text>1 karma</Text>
                                  </Flex>
                                  
                              </Flex>
              </>
            </Flex>
            <ChevronDownIcon />
          </Flex>
        ) : (
          <Icon as={VscAccount} fontSize={24} color={"gray.400"} mr={1} />
        )}
      </MenuButton>
      <MenuList>
        {user ? (
          <>
            {" "}
            <MenuItem>
              <Flex pr={2}>
                <Text>Profile</Text>
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <Flex align={"center"} onClick={() => signOut(auth)}>
                <Icon as={MdOutlineLogin} mr={2} />
                <Text>Logout</Text>
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem>
              <Flex pr={2}>
                <Text>Profile</Text>
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => setAuthModalState({open: true, View: "login"})}>
              <Flex align={"center"} onClick={() => signOut(auth)}>
                <Icon as={MdOutlineLogin} mr={2} />
                <Text>Log In / Sign In </Text>
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
