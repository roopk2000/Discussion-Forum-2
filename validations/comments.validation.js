const Joi=require("joi");

const validateComment=async(req, res, next)=>
{
    const schema=Joi.object({
        author:Joi.string().required(),
        comment :Joi.string().required().max(500)
    })
    const {error, value}=schema.validate(req.body);
    if(error){
        return res.status(422).json({error:error.message});
    }
    next();
}

module.exports=validateComment;