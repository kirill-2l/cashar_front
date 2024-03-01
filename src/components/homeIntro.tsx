import {
  Box,
  Button,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export function HomeIntro() {
  return (
    <Box py="100px">
      <Heading as="h1" size="6xl" maxW="40%">
        <>
          <Text
            fontSize="110px"
            fontWeight="extrabold"
            bgGradient="linear(to-l, #6bace5, #1d7eff)"
            bgClip="text"
          >
            CashAr
          </Text>
          <Text fontWeight="400" fontSize="xl">
            Выгодно и удобно обналичить и поменять USDT, USD, RUB, EUR, Western
            Union, Paypal, Wise и Payoneer.
          </Text>
        </>
      </Heading>
      <Link href="#anchor_one">
        <Button mt="1rem" colorScheme="blue" variant="outline">
          Смотреть карту обменников
        </Button>
      </Link>
    </Box>
  );
}
