import CreateCommunityModal from "@/app/components/Modal/CreateCommunity/CreateCommunityModal";
import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
const Communities = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
          <CreateCommunityModal open={open} />
      <MenuItem
        width={"100%"}
        fontSize={"10pt"}
        _hover={{ bg: "gray.100" }}
        onClick={() => setOpen(true)}
      >
        <Flex align={"center"}>
          <Icon as={GrAdd} mr={3} fontSize={20} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};

export default Communities;
