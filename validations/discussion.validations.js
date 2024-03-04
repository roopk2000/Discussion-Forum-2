const Joi=require("joi");
const model=require("../models/discussion.models")
const validateDiscussion =async( req, res, next)=>{
    const schema=Joi.object({
        title : Joi.string().max(150).required(),
        author : Joi.string().required(),
        content : Joi.string().default("").optional(),
    });

    const {error , value}= schema.validate(req.body);

    if(error){
        return res.status(422).json({error: error.message})
    }
   
    next();
}

const isDiscussionThere=async(req, res, next)=>{
   
        const {id}=req.params;
        const discussion=await model.findById(id);
        if(!discussion){
            return res.status(404).json({error :"Discussion not found"});

        }
        next();
    
    
  
}



module.exports={
    validateDiscussion,isDiscussionThere
}