import '../styles/globals.css'
import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export type LayoutProps = ({
  children,
}: {
  children: ReactElement;
}) => ReactElement;
type PageWithLayoutType = {
  layout: LayoutProps;
};

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: any;
};
const darkTheme = createTheme({
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp
