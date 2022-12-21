const express= require("express")
const path= require('path')
const dotenv=require("dotenv").config()
const port=process.env.PORT || 5000

const app=express()
// Body parse to get data from client side..

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Set Static path for client side...

app.use(express.static(path.join(__dirname, "public")))


app.use("/openai", require("./Routes/ImageGentRoute"))

app.listen(port, ()=>{
    console.log(`server is runnig at ${port}`)
})
