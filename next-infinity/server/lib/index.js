const express = require("express")
const commentsData = require("../data/comment")
const cors = require("cors")
const app = express()
const todoData  =require("../data/todo")
app.use(cors())
// send data to comments page

// Blogs data
const blogs = [{
    id:1,
    title:"assassin creed 1 story",
    story:"Altaire is  a young assassin ...."
},
{
    id:2,
    title:"assassin creed 2 story",
    story:"Et zio is  a young assassin ...."
},
{
    id:3,
    title:"assassin creed 4 story",
    story:"Et zio is  a young assassin ...."
},
]
// Routing
app.get("/comments", (req, res) => { res.send(commentsData) })

app.get("/about-us", (req, res) => {
    res.send([
        {
            id:234,
            title: "Assassin creed",
            image: "https://images.alphacoders.com/566/thumbbig-566158.webp",
            description: "Assassin's Creed is an action-adventure game set in an open world environment and played from a third-person perspective in which the player primarily assumes the role of Altaïr, as experienced by protagonist Desmond Miles."
        }
    ])
})

app.get("/blogs",(req,res)=>{
    res.send(blogs)
})
app.get("/blogs/:id",(req,res)=>{
    const id = req.params.id
  const blog = blogs.filter(blog=>blog.id ===Number(id))
  if (!blog) {
    return res.status(404).send('blog not found')
}
    res.send(blog)
})


// app.post("/comments",(req,res)=>{
//   const comment =   req.body
//   console.log('comments before push ', commentsData)
//   comments.push(comment)
//   console.log('comments after push ', commentsData)
// })




const Port = 3450
app.listen(Port, () => { console.log("your app running yare") })

