import "../styles/globals.css";

// eslint-disable-next-line react-pug/prop-types
function MyApp({Component, pageProps}) {
  return < Component { ...pageProps }
  />;
}

export default MyApp;
