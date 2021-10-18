require('dotenv').config()
const bodyParser = require('body-parser');
const express=require("express")
const app=require('app')
const axios=require("axios")

const {TOKEN,SERVER_URL}=process.env
const TELEGRAM_API=`https://api.telegram.org/bot${BOT_TOKEN}`
const URI=`/webhook/${TOKEN}`
const WEBHOOK_URL=SERVER_URL+URI


mongoose.connect('mongodb://localhost:27017/YonimanBot',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const app=express()
app.use(bodyParser.json())
const init =async()=>{
    const res=await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`)
    console.log(res.data)
}

app.post(URI,async(req,res)=>{
    console.log(req.body);
    return res.send();
})

app.listen(process.env.PORT || 5000, async()=>{
    console.log('app is running on port',process.env.PORT || 5000)
    await init()
})