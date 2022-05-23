import { Box, Heading, List, ListItem, VStack } from "@chakra-ui/react";
import React from "react";
import { navItems } from "./navData";
import { NavItem } from "./navItem";

const Sidebar: React.FC = () => {
  return (
    <VStack
      alignItems="flex-start"
      //maxW={{ base: 56, "2xl": 72 }}
      borderColor="gray.dark"
      borderWidth={2}
      borderRadius="lg"
      flexShrink={0}
      position="fixed"
      left={5}
      top={5}
      bg="gray.700"
      shadow={2}
    >
      <Box p={8} pb={4}>
        <Heading>Barbershop</Heading>
      </Box>

      <List width="full" overflowY="auto">
        {navItems.map((item, index) => (
          <ListItem key={item.label}>
            <NavItem item={item} />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Sidebar;
