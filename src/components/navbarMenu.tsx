import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";

export function NavbarMenu() {
  return (
    <>
      <Link as={NextLink} href={"/"}>
        БАНКИ
      </Link>
      <Link as={NextLink} href={"/"}>
        ДЕБЕТОВЫЕ КАРТЫ
      </Link>
      <Link as={NextLink} href={"/"}>
        ОБМЕННИКИ
      </Link>
    </>
  );
}
