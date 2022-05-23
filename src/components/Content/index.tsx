import {
  HStack,
  useBreakpointValue,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import React from "react";
import SearchBar from "../Searchbar";
import Sidebar from "../Sidebar";

// import { Container } from './styles';

const Content: React.FC = () => {
  const { isOpen, onToggle,getDisclosureProps } = useDisclosure({defaultIsOpen: true});
  const props = getDisclosureProps();
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const show = isOpen && isMobile;
  return (
    <HStack w="full" flex={1} overflow="hidden">
      <Sidebar isOpen={isOpen} onToggle={onToggle} />
      <VStack
        px={12}
        pt={12}
        height="full"
        w="full"
        flex={1}
        spacing={6}
        overflow="hidden"
      >
        {!show && <SearchBar />}
      </VStack>
    </HStack>
  );
};

export default Content;
