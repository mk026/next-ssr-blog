import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import Layout from "../components/layout/Layout";
import wrapper from "../store";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...props} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
