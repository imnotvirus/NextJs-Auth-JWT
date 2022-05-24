import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListItem, VStack
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { navItems } from "./navData";
import { NavItem } from "./navItem";
type Props = {
  isOpen: boolean;
  onToggle: () => void;
};
const Sidebar: React.FC<Props> = ({ isOpen, onToggle }) => {
 

  return (
    <Flex
      as={motion.div}
      w={isOpen ? "260px" : "75px"}
      zIndex={2}
      bg={'gray.800'}
      left="5"
      h="95vh"
      mx="2.5vh"
      boxShadow="0 4px 12px 0 rgba(255, 255, 255, 0.05)"
      borderRadius={isOpen ? "30px" : "15px"}
      flexDir="column"
      justifyContent="space-between"
      transition='0.5s all'
    >
      <Box textAlign="center" w="full" pt={8} px={2} pb={4}>
        <Flex
          flexDir={isOpen ? "row" : "column-reverse"}
          align="center"
          justify={"space-evenly"}
        >
          <Button mt={2} onClick={onToggle}>
            <HamburgerIcon />
          </Button>
          <VStack>
            <Image src="assets/images/logo.svg" boxSize={"28"} alt="logo" />
          </VStack>
        </Flex>
      </Box>
      <Flex flex={1} align={"center"} overflowY="auto">
        <List
          flexDir="column"
          w="100%"
          alignItems={isOpen ? "flex-start" : "center"}
          as="nav"
        >
          {navItems.map((item) => (
            <ListItem key={item.label}>
              <NavItem item={item} show={isOpen} />
            </ListItem>
          ))}
        </List>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
