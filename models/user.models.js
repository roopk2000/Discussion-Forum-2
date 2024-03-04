const mongoose=require("mongoose");

const user=mongoose.Schema({
    fullName:{
        type :String,
        maxlength: 50,
        default:"",
    },
    userName:{
        type: String,
        required : true,
        unique: true,
        maxlength:25,

    },
    email:{
        type: String,
        required:true,
        unique:true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']

    },

},{
    timestamps:true
});

const userSchema=mongoose.model("Users", user);
module.exports=userSchema;