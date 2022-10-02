import { createContext, useContext, useState } from "react";

// this context have user that come from backend
const UserContext= createContext();
// this context contain updated user
const UserUpdateContext = createContext();

// custom hooks for ThemeContext Consumers
// with this hook you can use user
export const useUser=() => useContext(UserContext);
// with this hook you can get and update your user
export const useUpdateUser = () => useContext( UserUpdateContext);





// function for ThemeContext Provider
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({userName:"pourya",role:"user",email:"pourya@gmail.com"});
// const {userName,email,role} =useAuth()
// setUser({...user,userName,role,email})
  console.log('user', user)

    return (
      <UserContext.Provider value={{userName:"pourya",role:"user",email:"pourya@gmail.com"}}>
        <UserUpdateContext.Provider value={user}>
          {children}
        </UserUpdateContext.Provider>
      </UserContext.Provider>
    );
  };
  
  