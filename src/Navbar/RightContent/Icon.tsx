import React from "react";
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { Flex, Icon } from "@chakra-ui/react";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";
const Icons = () => {
  return (
    <Flex>
      <Flex display={{ base: "none", md: "flex" }} align={"center"}>
        <Flex mr="1.5" ml="1.5" p="1" cursor={"pointer"} borderRadius={4}>
          <Icon as={BsArrowUpRightCircle} />
        </Flex>
        <Flex mr="1.5" ml="1.5" p="1" cursor={"pointer"} borderRadius={4}>
          <Icon as={IoFilterCircleOutline} />
        </Flex>{" "}
        <Flex mr="1.5" ml="1.5" p="1" cursor={"pointer"} borderRadius={4}>
          <Icon as={IoVideocamOutline} />
        </Flex>{" "}
        <Flex mr="1.5" ml="1.5" p="1" cursor={"pointer"} borderRadius={4}>
          <Icon as={BsArrowUpRightCircle} />
        </Flex>{" "}
        <Flex mr="1.5" ml="1.5" p="1" cursor={"pointer"} borderRadius={4}>
          <Icon as={BsArrowUpRightCircle} />
        </Flex>
        <Flex mr="1.5" ml="1.5" p="1" cursor={"pointer"} borderRadius={4}>
          <Icon as={BsArrowUpRightCircle} />
        </Flex>{" "}
        <Flex mr="1.5" ml="1.5" p="1" cursor={"pointer"} borderRadius={4}>
          <Icon as={BsArrowUpRightCircle} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Icons;
