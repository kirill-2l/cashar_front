import { Navbar } from "@/components/navbar";
import { Container, Flex } from "@chakra-ui/react";
import { Footer } from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" flex="1">
      <Navbar />
      <main>
        <Container maxW="container.lg">{children}</Container>
      </main>
      <Footer />
    </Flex>
  );
}
