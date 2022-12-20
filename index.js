const express= require("express")
const env= require("dotenv")
const bodyParser = require('body-parser');
const port=process.env.PORT || 5000

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/openai", require("./Routes/ImageGentRoute"))

app.listen(port, ()=>{
    console.log(`server is runnig at ${port}`)
})
