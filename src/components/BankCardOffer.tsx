import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

interface BankCardOfferProps {
  title: string;
  subtitle?: string;
  price?: number;
  imageSrc: string;
  children: React.ReactNode;
}
export function BankCardOffer({
  title,
  subtitle,
  price,
  imageSrc,
  children,
}: BankCardOfferProps) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "400px" }}
        src={imageSrc}
        alt={title}
      />

      <Stack>
        <CardBody>
          {title && <Heading size="md">{title}</Heading>}

          {subtitle && (
            <Text fontSize="0.75rem" fontWeight={100} py="2">
              {subtitle}
            </Text>
          )}

          {price && (
            <Text fontSize="2xl" fontWeight={700} py="2">
              ${price}
            </Text>
          )}

          {children}
        </CardBody>

        <CardFooter>
          <Link href="https://t.me/palatka" isExternal>
            <Button variant="outline" colorScheme="green">
              Заказать карту
            </Button>
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
}
