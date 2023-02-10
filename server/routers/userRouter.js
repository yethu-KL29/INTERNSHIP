const express = require("express");
const { register ,login,  getALLUsers} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.get('/getall',getALLUsers)


module.exports = userRouter;