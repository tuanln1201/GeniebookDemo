import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../globalstyles";
import { Inter } from "@next/font/google";
import Theme from "../theme";
import { Provider } from "react-redux";
import { setupStore } from "../store";

const inter = Inter({ subsets: [] });
const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <main className={inter.className}>
            <GlobalStyle />
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </Provider>
    </>
  );
}
