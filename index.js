const express = require("express");
const axios = require("axios");
const app = express();

app.get("/horoscope/:sunsign", async(req, res)=>{
    const {sunsign} = req.params;
    try{
        const response = await axios.get(`http://sandipbgt.com/theastrologer/api/horoscope/${sunsign}/today`);
        const data = response.data;
        res.status(200).json(data);
    }catch(err){
        console.error(err);
        res.status(500).json({error: "Internal Server Error"});
    }
})

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on PORT ${port}`);
});
