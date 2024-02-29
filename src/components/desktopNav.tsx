import {
  Box,
  Flex,
  Text,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";
import { Navbar } from "@/components/navbar";
import { NavbarMenu } from "@/components/navbarMenu";
export function DesktopNav() {
  return (
    <Box>
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Flex alignItems={"left"} gap={4}>
            <NavbarMenu />
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
}
