const express = require("express")
const commentsData = require("../data/comment")

const app = express()


// send data to comments page

app.get("/comments",(req,res)=>{
    res.send(commentsData)
})
// app.post("/comments",(req,res)=>{
//   const comment =   req.body
//   console.log('comments before push ', commentsData)
//   comments.push(comment)
//   console.log('comments after push ', commentsData)
// })




const Port = 3450
app.listen(Port,()=>{
  console.log("your app running yare");
})

