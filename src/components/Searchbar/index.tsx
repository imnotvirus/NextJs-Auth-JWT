import {
    Avatar, HStack, Input,
    InputGroup,
    InputLeftElement, Spacer
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";


const SearchBar: React.FC = () => {
  return (
    <HStack width="full">
      <InputGroup maxW="7xl">
        <InputLeftElement pointerEvents="none">
          <RiSearchLine />
        </InputLeftElement>
        <Input
          variant="outline"
          rounded="lg"
          placeholder="Search for sounds, tracks"
          _focus={{
            ringColor: "brand.red",
            ring: 3,
          }}
        />
      </InputGroup>
      <Spacer minW={12} />
      <Avatar />
    </HStack>
  );
};

export default SearchBar;
