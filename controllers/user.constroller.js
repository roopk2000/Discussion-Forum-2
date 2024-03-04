const model=require("../models/user.models")

const createUser= async(req, res)=>{
    try{
        const {userName, email}=req.body;
        const existingUser= await model.findOne({ $or: [{ userName }, { email }] });
        if(existingUser){
            res.status(409).json({message:"Failed to create a new user", reason:"User already exists"});
        }
        // console.log(username)
        const user=await model.create(req.body);
        console.log(req.body)
        res.status(200).json(user);
    }
    catch(error){
        console.log({error : error.message});
    }
};

const getUserByUsername=async(req, res)=>{
    try{
        const {username}=req.params;
        const user = await model.findOne({userName:username});
        if(!user){
            return res.status(404).json({message :"User not found"});
        }
        return res.status(200).json(user);

    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};

const getAllUsers=async (req, res)=>{
    try{
        const user=await model.find();
        if(user.length===0){
           return res.status(404).json({message:"User not found"});
        }
        if(user.length!==0){
       return res.status(200).json(user);
        }
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: error.message})
    }
}



  module.exports={
    createUser,getUserByUsername,getAllUsers
  }