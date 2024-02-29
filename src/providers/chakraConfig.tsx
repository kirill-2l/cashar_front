"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  ChakraProviderProps,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import { NextApiRequest } from "next";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

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
    // <CacheProvider>
    <ChakraProvider
      colorModeManager={colorModeManager}
      theme={theme}
      {...config}
    >
      {children}
    </ChakraProvider>
    // </CacheProvider>
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
