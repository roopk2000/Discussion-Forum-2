const checkApiKey=async(req, res, next)=>{
    const apiKey=req.headers["x-api-key"];
    if(apiKey!=="Abracadabra"){
       return  res.status(403).json({message:"Unauthorized Access"});
    }
    next();
}

module.exports={ checkApiKey};