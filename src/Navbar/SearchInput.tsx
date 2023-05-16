import React from "react";
import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
type SearchInput = {};

const SearchInput: React.FC<SearchInput> = () => {
  return (
    <Flex
      flexGrow={1}
      mr={2} align={"center"}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children={<SearchIcon color={"gray.300"} />}
        />
        <Input
          placeholder="Search Reddit"
          borderRadius={"20px"}
                  fontSize={"10pt"}
                  bg={"#EDEFF1"}
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid ",
            borderColor: "blue.100",
          }}
          _focus={{
            outline: "none",
            border: "1px soild",
            borderColor: "blue.100",
            background: "gray.50",
          }}
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
