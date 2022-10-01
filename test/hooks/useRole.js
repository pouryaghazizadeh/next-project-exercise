// import React from 'react'
// // import array of access route that can be like this
// const userName = "Pourya"
// const obj={
//     component:"blog",
//     routes:[
//         `/blogs/${username}`,
//         "/homeWorks",

//     ]
    
// }
// function useRole(route) {


//   return (
//   )
// }

// export default useRole

import React, {
    createContext,
    useContext,
    useMemo,
    useEffect,
  } from "react";
  import { useCurrentUser } from "@/hooks/index";
  import { useRouter } from "next/router";
  import UnAuthPage from "@/components/Layout/pages/unauth";
  
  const AuthStateContext = createContext();
  
  export function useAuth() {
    return useContext(AuthStateContext);
  }
  
  function AuthProvider({ children }) {
    const [user, { mutate }, { isLoading }] = useCurrentUser();
    const router = useRouter();
    // get role and add to a variable
    let role = user?.role;
    
    let allowed = true;
//   make condition for every role 
    if (router.pathname.startsWith("/user") && role !== "user") {
      allowed = false;
    }
    if (router.pathname.startsWith("/teacher") && role !== "teacher") {
      allowed = false;
    }
    if (router.pathname.startsWith("/applicant") && role !== "applicant") {
      allowed = false;
    }
    if (router.pathname.startsWith("/admin") && role !== "admin") {
      allowed = false;
    }
  
    useEffect(() => {
      role = user?.role;
      console.log(`LL: AuthProvider -> role`, role);
      if (!isLoading) {
        if (router.pathname.startsWith("/user") && role !== "user") {
          if (role) {
            console.log(router.pathname.replace("user", role));
            router.push(router.pathname.replace("user", role));
          } else {
            // router.push("/");
          }
        }
        if (router.pathname.startsWith("/teacher") && role !== "teacher") {
          if (role) {
            console.log(router.pathname.replace("teacher", role));
            router.push(router.pathname.replace("teacher", role));
          } else {
            router.push("/");
          }
        }
        if (router.pathname.startsWith("/applicant") && role !== "applicant") {
          if (role) {
            console.log(router.pathname.replace("applicant", role));
            router.push(router.pathname.replace("applicant", role));
          } else {
            router.push("/");
          }
        }
        if (router.pathname.startsWith("/admin") && role !== "admin") {
          if (role) {
            console.log(router.pathname.replace("admin", role));
            router.push(router.pathname.replace("admin", role));
          } else {
            router.push("/");
          }
        }
      }
    }, [user, router]);
  
    const contextValue = useMemo(() => [allowed, role], [allowed, role]);
    const ComponentToRender = allowed ? children : UnAuthPage;
  
    return (
      <AuthStateContext.Provider value={contextValue}>
        {ComponentToRender}
      </AuthStateContext.Provider>
    );
  }
  
  export { AuthProvider };
  ```
  
  and 
  _app.js
  
  ```
  
  // {userName:"pourya",
  // role:"teacher" 
// }
  // `user/${pourya}/home-work/${1234u5i3}
  // `user/${amirmostafa}/home-work/${1234u5ierwer3}
  import { AuthProvider } from "@/components/providers/authContext";
  
  const App = ({ Component, pageProps }) => {
  return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
  )
  }