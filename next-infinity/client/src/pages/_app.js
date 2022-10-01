// { Component,router, pageProps }
import {useUpdateUser,useUser,UserProvider} from "../context/userContext"
function MyApp({Component,pageProps}) {


  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
     )
}


export default MyApp
