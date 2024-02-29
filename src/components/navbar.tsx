import {
  Box,
  Flex,
  Image,
  useBreakpointValue,
  useColorModeValue,
  Text,
  Img,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { DesktopNav } from "@/components/desktopNav";

export function Navbar() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.600", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Box>
            <Img
              borderRadius="full"
              boxSize="50px"
              src="./logo.png"
              alt="Cashar"
            ></Img>
          </Box>
        </Flex>
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex>

        <Flex display={{ base: "none", md: "flex" }} ml={10}></Flex>
      </Flex>
    </Box>
  );
}
