const model=require("../models/discussion.models");
const model1=require("../models/user.models");;
const {modelComment}=require("../models/comments.model")

const addDiscussion=async (req, res)=>{
try{
    const discussion= await model.create(req.body);
   return res.status(200).json(discussion);
}    
catch(error){
   return res.status(500).json({error : error.message});
}
};


const findAllUsers=async (req, res)=>{
    try{
        const users= await model.find();
        if(!users){
            return res.status(404).json({message : "NO discussion found"});
        }
        return res.status(200).json(users);
    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
}

const findUser=async (req, res)=>{
    try{
        const {username}= req.params;
        const user=await model1.findOne({userName :username});
        if(!user){
            console.log(user)
            return res.status(404).json({message : "User not found"});
        }
        return res.status(200).json(user);

    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
}

const findDiscussionById=async(req, res)=>{
    try{
        const {id}=req.params;
        const discussion=await model.findOne({"_id":id});
        if(!discussion){
            return res.status(404).json({message: "No discussions found with this id"})
        }
        return res.status(200).json(discussion);
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
}

const deleteDiscussionById=async(req, res)=>{
    try{
        const {id}=req.params;
        const deletedDiscussion= await model.findByIdAndDelete(id);
        return res.status(200).json(deletedDiscussion);
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
}

const updateDiscussion=async(req, res)=>{
    try{
        const {id}=req.params;
        const discussion=await model.findByIdAndUpdate(id,req.body);
        // console.log(discussion);
        const updatedDiscussion= await model.findById(id);
        // console.log(updatedDiscussion);

        return res.status(200).json(updatedDiscussion);
        
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
}

const updateComment=async (req, res)=>{
    try{
        const {id}=req.params;
        const {comment}=req.body;
        // console.log(comment)
        const updatedDiscussion=await model.findByIdAndUpdate(id,  { $push: { comments: comment } },{new :true});
        // console.log(updatedDiscussion)
        if(!updatedDiscussion){
            return res.status(404).json({message :"Discussion not found"});

        }
        const discussion=await model.findById(id);
        return res.status(200).json(discussion)
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
}

module.exports={
    addDiscussion,
    findAllUsers,
    findUser,
    findDiscussionById,
    deleteDiscussionById,updateDiscussion,
    updateComment
}