import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "../styles/plugins.css";
import "../styles/style.css";

NProgress.configure({ showSpinner: true });
Router.events.on('routeChangeStart', (url) => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
