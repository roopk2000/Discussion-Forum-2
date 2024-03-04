const model=require("../models/discussion.models");


const authorValidation=async (req, res, next)=>{
    const {author}=req.body;
    const present=await model.findOne({author : author});
    if(!present){
        return res.status(404).json({message : `user not found ${author}`})
    }
    next();
}

const authorValidationForDeletion= async(req, res, next)=>{
    try{
    const {id}=req.params;
    const discussion= await model.findById(id);
        // console.log(req.body)
        // console.log(req.body.author)

    if(!discussion){
        return res.status(404).json({message : "Discussion not found"});
    }
    const author=req.body.author;
    const title=req.body.title;
    // console.log(author, discussion.author, id,title);

    if(discussion.author!==author){
        return res.status(403).json({mmessage :"Unauthorized access"});
    }
    next();
    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
}


module.exports={
    authorValidation,
    authorValidationForDeletion
}