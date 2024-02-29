"use client";

import { ChakraConfig } from "@/providers/chakraConfig";
import App, { AppProps } from "next/app";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";

interface CustomAppProps {
  cookies?: RequestCookies;
}
export function Providers({
  children,
  pageProps,
}: {
  children: React.ReactNode;
  pageProps: AppProps["pageProps"];
}) {
  return <ChakraConfig cookies={pageProps.cookies}>{children}</ChakraConfig>;
}
