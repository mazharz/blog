import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "@/Styles/globals";
import { Layout } from "@/Components/layout/layout/layout";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useRouter } from "next/router";
import { AnimationClassWrapper, pageTransitionDuration } from "@/Styles/_app";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={router.asPath}
            timeout={pageTransitionDuration}
            classNames="page-transition"
          >
            <AnimationClassWrapper>
              <Component {...pageProps} />
            </AnimationClassWrapper>
          </CSSTransition>
        </SwitchTransition>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
