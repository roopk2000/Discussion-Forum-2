const express=require("express");
const app=express();
const router=express.Router();
const model=require("../models/user.models");
const {createUser, getUserByUsername, getAllUsers}=require("../controllers/user.constroller")
const { checkApiKey}=require("../validations/user.validations")

router.post("/register",createUser )


router.get("/all", checkApiKey, getAllUsers)


router.get("/:username", getUserByUsername)


module.exports=router;