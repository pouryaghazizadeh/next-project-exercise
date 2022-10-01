import {styled } from '@mui/material/styles';
import {useAuth}from "../hooks/useAuth"
// // styles 
// const  Root = styled("main")(theme=>{
//   return({
//     minHeight:"100vh",
//     display:"flex",
//     justifyContent:"center",
//     alignItems:"center",
//   })
// })
// const ContainerForm = styled("form")(theme=>{
//   return({

//       display:"flex",
//       flexDirection:"column",
//       gap:"1.5rem",
//       width:"30%",
//       height:"60%",
//       padding:"1rem",

//   })
// })




// const metaDataRegister = [
//   {
//     id: "I1",
//     placeholder: "enter your name",
//     type: "text",
//     variant: "outlined",
//     color: "primary",
//     size:"small"
//   },
//   {
//     id: "I2",
//     placeholder: "enter your email",
//     type: "email",
//     variant: "outlined",
//     color: "primary",
//     size:"small"
//   },
//   {
//     id: "I3",
//     placeholder: "enter your password",
//     type: "password",
//     variant: "outlined",
//     color: "primary",
//     size:"small"
//   },

// ]

function Register() {

const userObj = {userName:"pourya",role:"admin",email:"pourya@gmail.com"}
useAuth(userObj)
  return (
    <div>
      register
      {/* <ContainerForm>
        {
          metaDataRegister.map(attribute => {
            return (
            <Input key={attribute.id}
              placeholder={attribute.placeholder}
              type={attribute.type}
              variant={attribute.variant}
              color={attribute.color}
              size={attribute.size}
              />
            )
          })
        }
        <Button text="submit"variant="contained"  />


      </ContainerForm> */}


    </div>
  )
}

export default Register