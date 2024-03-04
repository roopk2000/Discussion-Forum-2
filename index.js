const express= require("express");
const mongoose=require("mongoose")
const app=express();
const PORT=8082;
const userRoute=require("./routes/user.routes");
const discussionRoute=require("./routes/discussion.routes")
app.use(express.json());

app.use("/user",userRoute);
app.use("/discussions", discussionRoute);


mongoose.connect("mongodb+srv://meroopkumar2:qLpIRWa1Ix7YzOiD@cluster0.xoyyo27.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to the database");
}).catch(()=>{
    console.log("Could not connect to the database");

})

app.listen(PORT, ()=>{
    console.log(`Server is listening to the PORT ${PORT}`);
});














//qLpIRWa1Ix7YzOiD  -- password mongodb