import {
  Flex,
  IconButton,
  Button,
  Switch,
  useColorMode,
  Image,
  Container,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isMenuShown, toggleIsMenuShown] = useState(false);
  const menu = [
    {
      label: "Банки",
      href: "banks",
      id: "banks",
    },
    {
      label: "Дебетовые карты",
      href: "cards",
      id: "debit_card",
    },
    {
      label: "Обменники",
      href: "exchangers",
      id: "exchangers",
    },
  ];

  return (
    <Container maxW="container.xl">
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
        <Flex hideBelow="md" alignItems="center">
          {menu.map((i) => (
            <Link key={i.id} href={i.href} as={NextLink}>
              <Button variant="ghost" aria-label={i.id} my={5} w="100%">
                {i.label}
              </Button>
            </Link>
          ))}
          <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
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
            <Link key={i.id} href={i.href} as={NextLink}>
              <Button variant="ghost" aria-label="Home" my={5} w="100%">
                {i.label}
              </Button>
            </Link>
          ))}
          <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
        </Flex>
      </Flex>
    </Container>
  );
}
