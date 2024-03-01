"use client";

import {
  ChakraProvider,
  ChakraProviderProps,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import { NextApiRequest } from "next";

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,

  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
});

export function ChakraConfig({
  children,
  cookies,
}: {
  children: React.ReactNode;
  cookies?: string;
}) {
  const config: ChakraProviderProps = {
    toastOptions: { defaultOptions: { position: "top-right" } },
  };

  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider
      colorModeManager={colorModeManager}
      theme={theme}
      {...config}
    >
      {children}
    </ChakraProvider>
  );
}

export function getServerSideProps({ req }: { req: NextApiRequest }) {
  return {
    props: {
      // first time users will not have any cookies, and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? "",
    },
  };
}
