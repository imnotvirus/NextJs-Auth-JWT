import { HStack } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../Sidebar";

// import { Container } from './styles';

const Content: React.FC = () => {
  return (
    <HStack w="full" flex={1} overflow="hidden">
      <Sidebar />
    </HStack>
  );
};

export default Content;
