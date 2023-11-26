const express=require("express");
const router=express.Router();

const {create,getSingleTask,getTasks}=require("../controllers/taskController")
const authenticatio=require("../middleware/auth")

router.post("/",authenticatio,create);
router.get("/",getTasks);
router.get("/:id",getSingleTask);

module.exports=router;