import { HomeIntro } from "@/components/homeIntro";
import { Faq } from "@/components/faq";
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <HomeIntro />

      <Box as="section" my={4}>
        <Heading as="h2" size="2xl" mb="4">
          Faq's
        </Heading>
        <Faq></Faq>
      </Box>
    </>
  );
}
