import { Button, Grid, Container } from '@mui/material'
import Input from '../components/atoms/Input'
import CardTodo from "../components/utilities/CardTodo"
import { useSelector } from 'react-redux'
import useSWR, { mutate } from 'swr'
import { useRouter } from "next/router"
import { useState } from 'react'



const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const getServerSideProps = async (context) => {
  const todosData = await fetcher("http://localhost:3450/todos")
  return { props: { todos: todosData } }
}



function Todo({ todos }) {
  const { data, error } = useSWR('http://localhost:3450/todos', fetcher, {
    // revalidateOnFocus :false
  })
  const [newTodo, setNewTodo] = useState("")
  const [updatedTodo, setUpdatedTodo] = useState({ updatedTodo: "", id: "" })

  const router = useRouter()
  const { userName } = useSelector(state => state.user)


  const handleAddTodo = async (e) => {
   if(newTodo!==""){
    await fetcher("http://localhost:3450/todos",
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        { userName: userName, newTodo: newTodo }
      )
    })
  // mutate("http://localhost:3450/todos")
  setNewTodo("")
   }else{
    alert("fill the input")
    
   }
    // router.replace(router.asPath)

  }

  const handleChange = (e) => {
    setNewTodo(e.target.value)

  }

  const handleEdit = (e, { id }) => {
    console.log("this is id",id);
    setUpdatedTodo({ updatedTodo: e.target.value, id: id })
  }
  const handleDelete = async ({ id }) => {
    await fetcher("http://localhost:3450/todos",
      {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          { userName: userName, id: id }
        )
      })
      // setInterval(()=>{router.replace(router.asPath)},3000)
  }
  if (!data) {
    return <h1>loading...</h1>
  }
  if (error) {
    return <h3>{error}</h3>
  }

  return (
    <main>
      <Grid container spacing={1} sx={{ margin: "2rem" }}>
        <Grid item xs={10} >
          <Input color="secondary" variant="outlined" placeholder="inter your task" fullWidth onChange={handleChange} value={newTodo} />
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
          <Button variant='contained' color='secondary' size='large' onClick={handleAddTodo}>Add</Button>
        </Grid>
      </Grid>

      {/* map on todos */}
      <Container sx={{display:"flex",flexDirection:"column",gap:"1rem",  }}>

    
      {
        todos && todos[userName]&& todos[userName].todos.length ? todos[userName].todos.map((data) => {
          return (
            < CardTodo key={data.id}
              handleEdit={(e)=>handleEdit(e,data)}
              currantData={data.todo}
              handleDelete={(e) => handleDelete(data)}
              userName={userName}
              todoUpdated={updatedTodo} />
          )
        }) : <h2>you dont have a todo</h2>

      }
        </Container>
    </main>

  )
}

export default Todo