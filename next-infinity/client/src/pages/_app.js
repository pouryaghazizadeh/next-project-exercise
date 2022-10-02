// { Component,router, pageProps }
import {UserProvider} from "../context/userContext"
import { Provider } from 'react-redux'
import{store}from "../redux/store"
function MyApp({Component,pageProps}) {


  return (
    <UserProvider>
       <Provider store={store}>
      <Component {...pageProps} />

       </Provider>
    </UserProvider>
     )
}


export default MyApp
