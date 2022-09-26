
function MyApp({ Component, pageProps }) {
  return (
    //   <ContextThemeProvider>
        // <Header/>
        <Component {...pageProps} />
        // <CssBaseline/>
    //   </ContextThemeProvider>
  )
}

export default MyApp
