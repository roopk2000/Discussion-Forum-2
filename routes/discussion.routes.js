const express=require("express");
const { addDiscussion, findAllUsers, findUser, findDiscussionById, deleteDiscussionById, updateDiscussion, updateComment } = require("../controllers/discussion.conntroller");
const router=express.Router();
const {authorValidation, authorValidationForDeletion}=require("../validations/author.validations");
const { validateDiscussion, isDiscussionThere } = require("../validations/discussion.validations");
const { checkApiKey } = require("../validations/user.validations");
const validateComment = require("../validations/comments.validation");



router.post("/new",authorValidation,validateDiscussion, addDiscussion);
router.get("/all",checkApiKey,findAllUsers);
router.get("/user/:username", findUser);
router.get("/id/:id",findDiscussionById);
router.delete("/id/:id",authorValidationForDeletion ,deleteDiscussionById);
router.patch("/id/:id",authorValidationForDeletion, updateDiscussion)
router.put("/:id/comment",authorValidation,isDiscussionThere,validateComment,updateComment)
module.exports=router;