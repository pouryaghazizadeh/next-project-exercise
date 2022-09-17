import { ThemeProvider as ContextThemeProvider} from "../context/ThemeContext";
import Header from "../components/Header";
import CssBaseline from '@mui/material/CssBaseline';

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
