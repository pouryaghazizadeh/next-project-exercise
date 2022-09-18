const express = require("express")
const commentsData = require("../data/comment")
const cors = require("cors")
const app = express()

app.use(cors())
// send data to comments page

app.get("/comments", (req, res) => { res.send(commentsData) })

app.get("/about-us", (req, res) => {
    res.send([
        {
            title: "Assassin creed",
            image: "https://i.pinimg.com/564x/f2/30/7e/f2307ec1abde44f5a222ddd5b276631e.jpg",
            description: "Assassin's Creed is an action-adventure game set in an open world environment and played from a third-person perspective in which the player primarily assumes the role of Altaïr, as experienced by protagonist Desmond Miles."
        }
    ])
})



// app.post("/comments",(req,res)=>{
//   const comment =   req.body
//   console.log('comments before push ', commentsData)
//   comments.push(comment)
//   console.log('comments after push ', commentsData)
// })




const Port = 3450
app.listen(Port, () => { console.log("your app running yare") })

