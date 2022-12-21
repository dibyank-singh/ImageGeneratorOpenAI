const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,  
});
const openai = new OpenAIApi(configuration);

const ImageGeneratorAI= async(req, res)=>{
     const {prompt, size}=req.body;
     console.log(req.body)
     const imagesize= size === "small" ? '256x256' : size ==="medium"? 
      '512x512': '1024x1024';
    try{
        console.log("checkingggg")
        const response= await openai.createImage({
            prompt,
            n:1,
            size:imagesize
        })
       console.log(response)
       const ImageUrl= response.data.data[0].url

        res.status(200).json({
            message:"Success",
            data:ImageUrl
        })
        console.log("it hits here..")
    }catch(err){
        res.status(400).json({
            error:err,
            message:"Sorry, We can't generate this image..."
        })
        console.log("it hits here.. errrr mee")
    }
}
module.exports={ImageGeneratorAI}