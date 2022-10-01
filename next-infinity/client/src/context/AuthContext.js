import React from "react";
import { useRouter } from "next/router";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = React.useState({ token: ""});

    const setUserAuthInfo = ({ data }) => {
        const token = localStorage.setItem("token", data.data);

        setAuthState({
            token,
        });
    };
    // checks if the user is authenticated or not
    const isUserAuthenticated = () => {
        if (!authState.token) {
            return false;
        }
    };

    return (
        <Provider
            value={{
                authState,
                setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
                isUserAuthenticated,
            }}
        >
            {children}
        </Provider>
    );
};

export { AuthContext, AuthProvider };











// import React from 'react';
// import Router from 'next/router';

// const login = '/login?redirected=true'; // Define your login route address.

// /**
//  * Check user authentication and authorization
//  * It depends on you and your auth service provider.
//  * @returns {{auth: null}}
//  */
// const checkUserAuthentication = () => {
//   return { auth: null }; // change null to { isAdmin: true } for test it.
// };

// export default WrappedComponent => {
//   const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

//   hocComponent.getInitialProps = async (context) => {
//     const userAuth = await checkUserAuthentication();

//     // Are you an authorized user or not?
//     if (!userAuth?.auth) {
//       // Handle server-side and client-side rendering.
//       if (context.res) {
//         context.res?.writeHead(302, {
//           Location: login,
//         });
//         context.res?.end();
//       } else {
//         Router.replace(login);
//       }
//     } else if (WrappedComponent.getInitialProps) {
//       const wrappedProps = await WrappedComponent.getInitialProps({...context, auth: userAuth});
//       return { ...wrappedProps, userAuth };
//     }

//     return { userAuth };
//   };

//   return hocComponent;
// };