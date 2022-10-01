import { Button } from '@mui/material'
import Input from '../components/atoms/Input'
import CardTodo from "../components/utilities/CardTodo"
const getServerSideProps = async(context)=>{
  const {req} = context

  switch (req) {
    case "GET":
      return
    case "POST":
      return      
  

  }

  return(
    {

    }
  )
}



function Todo(context) {
  return (
    <main>
        <Input color="secondary" variant="outlined" placeholder="inter your task" fullWidth />
        <Button >Add</Button>
        < CardTodo/>
        
    
    </main>
    
  )
}

export default Todo