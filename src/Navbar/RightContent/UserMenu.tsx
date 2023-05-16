import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import {FaRedditSquare } from "react-icons/fa"
import {VscAccount } from "react-icons/vsc"
import {IoSparkles} from "react-icons/io5"
type UserMenu = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenu> = ({ user }) => {
  return (
    <Menu>
      <MenuButton>
        {user ? (
          <Flex>
            {" "}
            <>
              <Icon
                as={FaRedditSquare}
                fontSize={24}
                mr="1"
                color={"gray.300"}
              />
            </>
          </Flex>
        ) : (
          <Text>no user</Text>
        )}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
