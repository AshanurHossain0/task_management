const express=require("express");
const router=express.Router();

const {create,getSingleTask,getTasks,updateTask,deleteTask}=require("../controllers/taskController")
const authentication=require("../middleware/auth")

router.post("/",authentication,create);
router.get("/",getTasks);
router.get("/:id",getSingleTask);
router.put("/:id",authentication,updateTask);
router.delete("/:id",authentication,deleteTask);

module.exports=router;