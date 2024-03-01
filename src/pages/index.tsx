import { HomeIntro } from "@/components/homeIntro";
import { Faq } from "@/components/faq";
import { Box, Heading } from "@chakra-ui/react";
import { ExchangeRates } from "@/components/exchangeRates";
import { BaseSection } from "@/components/baseSection";

export default function Home() {
  return (
    <>
      <HomeIntro />
      <BaseSection title="Faq's">
        <Faq />
      </BaseSection>
      <BaseSection title="Курсы обмена">
        <ExchangeRates />
      </BaseSection>
    </>
  );
}
