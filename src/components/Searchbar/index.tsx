import {
  Avatar,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

const SearchBar: React.FC = () => {
  return (
    <HStack width="full">
      <InputGroup w={'full'}>
        <InputLeftElement pointerEvents="none">
          <RiSearchLine />
        </InputLeftElement>
        <Input
          w={"full"}
          variant="outline"
          rounded="lg"
          placeholder="Search for sounds, tracks"
          _focus={{
            ringColor: "brand.red",
            ring: 3,
          }}
        />
      </InputGroup>
      <Spacer  />
      <Avatar />
    </HStack>
  );
};

export default SearchBar;
