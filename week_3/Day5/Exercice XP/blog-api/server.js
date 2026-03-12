const express = require('express')


const app = express()
app.use(express.json())

const post = [{
    id : 1,
    title : " AAAA ",
    content : "dddd"
},
{
    id : 2,
    title : " BBBB ",
    content : "dddd"
},
{
    id : 3,
    title : " CCCC ",
    content : "dddd"
}]

app.get('/posts', (req, res)=> {
    try {
        res.json(post)
        
    } catch (error) {
        console.error("something's wrong!")
        
    }
})
app.get('/posts/:id', (req, res)=> {
    try {
        const id = Number(req.params.id)
        const singlePoste = post.find(p=>p.id === id) 
        res.json(singlePoste)
        
    } catch (error) {
        console.error("something's wrong!")
        
    }
})
app.post('/posts', (req, res)=> {
    try {
        const newPost = {
            id: post.length + 1,
            title: req.body.title,
            content: req.body.content
        }
        post.push(newPost)
        res.status(201).json(newPost)  
    } catch (error) {
        console.error("something's wrong!")
        
    }
})
app.put('/posts/:id', (req, res)=> {
    try {
        const id = Number(req.params.id)
        const foundpost = post.find(p => p.id === id)
        post.title = req.body.title
        post.content = req.body.content
        res.json(foundpost)
    } catch (error) {
        console.error("something's wrong!")
        
    }
})
app.delete('/posts/:id', (req, res)=> {
    try {
        const id = Number(req.params.id)
        const index = post.findIndex(p => p.id === id)
        post.splice(index, 1)
        res.json(post)
    } catch (error) {
        console.error("something's wrong!")
    }
})


app.listen(9090,() =>{
    console.log("hello world 9090");
    

})



