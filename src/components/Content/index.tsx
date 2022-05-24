import {
  ChakraProps,
  Flex,
  HStack,
  useBreakpointValue,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import React from "react";
import SearchBar from "../Searchbar";
import Sidebar from "../Sidebar";

type Props = ChakraProps & {
  children: React.ReactNode;
};

const Content: React.FC<Props> = ({ children, ...props }) => {
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true,
  });
  const isMobile = useBreakpointValue({ base: true, sm: false });
  return (
    <HStack height="100vh" width="full" overflow="hidden" spacing={0}>
      <Sidebar isOpen={isOpen} onToggle={onToggle} />
      <VStack
        px={4}
        pt={12}
        height="full"
        w="full"
        flex={1}
        spacing={2}
        overflow="hidden"
      >
        <VStack
          display={{ base: !isOpen ? "inherit" : "none", sm: "inherit" }}
          flex={1}
          w="full"
        >
          <SearchBar />

          <Flex flex={1} {...props}>
            {children}
          </Flex>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default Content;
