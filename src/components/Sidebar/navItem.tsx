import { Box, Heading, HStack, Icon, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { NavItem as Item } from "./types";

type Props = {
  item: Item;
  show: boolean;
};

export const NavItem = ({ item, show }: Props) => {
  const { label } = item;
  const router = useRouter();


  
  if (item.type === "link") {
    const { icon } = item;

    const isActive = router.asPath === item.href;

    return (
      <NextLink href={item.href} passHref>
        <Link variant="unstyled" _hover={{ textDecoration: "none" }}>
          <HStack
            align="center"
            justify="flex-start"
            height={{ base: 10, "2xl": 14 }}
            transition="ease-out"
            justifyContent={"center"}
            transitionProperty="background"
            transitionDuration="normal"
            _hover={{
              background: "gray.dark",
            }}
          >
            <Icon
              width={5}
              height={5}
              mx={show ? 4 : 0}
              color={isActive ? "brand.red" : "gray.light"}
              as={icon}
            />
            {show && (
              <Text
                fontSize="md"
                fontWeight="medium"
                flex={1}
                letterSpacing="wider"
                color={isActive ? "brand.red" : "whiteAlpha.900"}
              >
                {label}
              </Text>
            )}
            {isActive && show && <Box width={1} height={6} bg="brand.red" />}
          </HStack>
        </Link>
      </NextLink>
    );
  }

  return (
    <Heading
      color="gray.light"
      fontWeight="normal"
      textTransform="uppercase"
      letterSpacing={show ? 6 : 2}
      fontSize="sm"
      ml={show ? 8 : 2}
      mt={{ base: 6, "2xl": 8 }}
      mb={2}
      display={show ? "block" : "none"}
    >
      {label}
    </Heading>
  );
};
