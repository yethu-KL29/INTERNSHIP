const User = require('../models/user');
const bcrypt = require("bcryptjs")

const register=async(req,res,next)=>{
    const{name,email ,password} =req.body
    let user;
    if(!email || !password || !name){
          return res.status(422).json({message:"invalid credentials"})
    }
    try {
        user = await User.findOne({email})
        if(user){
            return res.status(400).json({user: 'User already exists'})
        }
        const hashedPass= bcrypt.hashSync(password)
        user = new User({
            name,
            email,
            password:hashedPass
           
            

         })
        await user.save()
    } catch (error) {
        console.log(error)
    }
    const {password:hashedPass,...info}=user._doc
    if(!user){
        return res.status(500).json({message:"internal server error"})
    }
    return res.status(201).json({info})
}
const login = async(req,res,next)=>{
    const {email,password}=req.body

   
    let existingUser;
    try{
        existingUser = await User.findOne({email})
    }catch(error){
        console.log(error)
    }
    if(!existingUser){
        return res.status(422).json({message:"user not avail"})
    }

    
    



    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);

     const {password:hashedPass,...info}=existingUser._doc
    if(isPasswordCorrect){
        return res.status(200).json({message:"successfully loggedin",user:info} )
    }
    return res.status(404).json({message:"password is incorrect"})
   
}


const getALLUsers = async(req,res,next)=>{
    let users;
    try{
        users = await User.find()
    }catch(err){
        console.log(err)
    }
    if(!users){
        return res.status(400).json({msg: "User does not exist"})
    }
    return res.status(200).json({users})
}





 
exports.getALLUsers=getALLUsers
exports.register=register
exports.login=login
