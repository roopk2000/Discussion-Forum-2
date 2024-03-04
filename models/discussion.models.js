const mongoose=require("mongoose");
const {commentSchema}=require("./comments.model")
const discussionFormat=mongoose.Schema({
    title:{
        type :String,
        maxlength: 150,
        required : true
    },
    author:{
        type: String,
        required: true,
        immutable : true,
    },
    content:{
        type: String,
        default:"",
    },
    comments:{
        type : [commentSchema],
        default:[]
    }
},{
    timestamps:true,
})



const discussion =mongoose.model("Discussions", discussionFormat);
module.exports=discussion;