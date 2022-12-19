const express= require("express")
const env= require("dotenv")
const port=process.env.PORT || 5000

const app=express()

app.use("/openai", require("./Routes/ImageGentRoute"))



app.listen(port, ()=>{
    console.log(`server is runnig at ${port}`)
})
