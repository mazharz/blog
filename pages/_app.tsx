import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "@/Styles/globals";
import { Layout } from "@/Components/layout/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
