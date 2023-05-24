const express = require("express");
const {createTask, getTask, getTaskById, updateTask, deleteTask} = require("../controller/taskManager");
const {createAccount, loginAccount} = require("../controller/userController");
const {createOrder} = require("../controller/orderController");
const authentication = require("../middleware/authentication")
const router = express.Router();
//manage task router
router.post("/create-task",authentication,createTask)
router.get("/get-task",getTask)
router.get("/task/:id",getTaskById)
router.patch("/update/:id",updateTask)
router.delete("/delete/:id",deleteTask)

//manage user router
router.post("/create-acc",createAccount)
router.post("/login",loginAccount)

//manage order
router.post("/create-order",createOrder)

module.exports=router