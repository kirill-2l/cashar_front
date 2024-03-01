import { Providers } from "@/providers";
import "@/styles/index.css";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";

<style global jsx>{`
  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div {
    height: 100%;
  }
`}</style>;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {}, []);
  console.log(pageProps);
  return (
    <Providers pageProps={pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default MyApp;
