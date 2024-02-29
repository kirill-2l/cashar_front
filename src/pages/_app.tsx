import { Providers } from "@/providers";
import "@/styles/index.css";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";

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
