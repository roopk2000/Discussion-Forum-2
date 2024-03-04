const mongoose=require("mongoose");

const commentSchema=mongoose.Schema({
    author:{
        type: String,
        required:true,
        immutable:true
    },
    comment:{
        type:String,
        required : true,
        maxlength:500
    }
});

const comments=mongoose.model("Comments",commentSchema)
module.exports={comments};