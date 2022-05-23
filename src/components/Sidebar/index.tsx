import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button, Heading,
  HStack,
  List,
  ListItem,
  useBreakpointValue,
  VStack
} from "@chakra-ui/react";
import React from "react";
import { navItems } from "./navData";
import { NavItem } from "./navItem";
type Props = {
  isOpen: boolean;
  onToggle: () => void;
};
const Sidebar: React.FC<Props> = ({ isOpen, onToggle }) => {
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const show = isOpen && isMobile;

  return (
    <VStack alignItems="flex-start" w={"260px"} h="full" flexShrink={0}>
      <Box
        position="fixed"
        left="5"
        top="5"
        w={"260px"}
        borderColor="gray.dark"
        borderWidth={2}
        borderRadius="lg"
      >
        <Box textAlign="center" w="full" pt={8} px={7} pb={4}>
          <HStack>
            <Heading wordBreak={"break-word"}>Barbershop do Gordin</Heading>
            <Button onClick={onToggle}>
              <HamburgerIcon />
            </Button>
          </HStack>
        </Box>
        {isOpen ? "open" : "closed"}
        <List width="full" overflowY="auto">
          {navItems.map((item, index) => (
            <ListItem key={item.label}>
              <NavItem item={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};

export default Sidebar;
