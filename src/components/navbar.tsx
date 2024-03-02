import {
  Flex,
  IconButton,
  Button,
  Switch,
  useColorMode,
  Image,
  Container,
  Box,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { AppRoutes } from "@/kernel/routes";

const menu = [
  {
    label: "Банки",
    href: "banks",
  },
  {
    label: "Дебетовые карты",
    href: AppRoutes.debitCards,
  },
  {
    label: "Обменники",
    href: "exchangers",
  },
];

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isMenuShown, toggleIsMenuShown] = useState(false);
  const router = useRouter();

  const isActiveRoute = (href: string) => router.pathname === href;

  return (
    <Box as="header" role="contentinfo" my={6}>
      <Container maxW="container.2xl">
        <Flex
          top="1rem"
          right="1rem"
          align="center"
          justifyContent="space-between"
        >
          {/* Desktop */}
          <Flex>
            <Link href="/">
              <Image
                src="/logo.png"
                borderRadius="full"
                boxSize="50px"
                alt="Picture of the author"
              />
            </Link>
          </Flex>
          <Flex hideBelow="md" alignItems="center" gap={2}>
            {menu.map((i) => (
              <Link key={i.href} href={i.href} as={NextLink}>
                <Button
                  isActive={isActiveRoute(i.href)}
                  variant="ghost"
                  aria-label={i.label}
                  w="100%"
                >
                  {i.label}
                </Button>
              </Link>
            ))}
            <IconButton
              aria-label="Switch dark mode"
              variant="ghost"
              icon={isDark ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </Flex>

          {/* Mobile */}
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            onClick={() => toggleIsMenuShown(!isMenuShown)}
            display={["flex", "flex", "none", "none"]}
          />
        </Flex>

        {/* Mobile Content */}
        <Flex
          w="100vw"
          display={isMenuShown ? "flex" : "none"}
          bgColor="gray.50"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Open Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => toggleIsMenuShown(!isMenuShown)}
            />
          </Flex>

          <Flex flexDir="column" align="center">
            {menu.map((i) => (
              <Link key={i.href} href={i.href} as={NextLink}>
                <Button variant="ghost" aria-label={i.label} my={5} w="100%">
                  {i.label}
                </Button>
              </Link>
            ))}
            <Switch
              color="green"
              isChecked={isDark}
              onChange={toggleColorMode}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
