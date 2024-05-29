const User = require("../models/auth-models");
const bcrypt = require("bcrypt");
const jwt  = require('jsonwebtoken');
const Services = require("../models/service-models");

//home page logic start here

const home = async (req,res) =>{
    try {
        res.status(200).json({message:"welcome to home page using controllers"})
    } catch (error) {
        console.log("error from home page");
    }
}


//register page logic start here

const register = async (req,res) => {
    try {
       const {username,email,phone,password} = req.body;

       //user check user is register and not

       const userExist = await User.findOne({email});
       if(userExist){
        return res.status(401).json({message:"email already exist"});
       }

       // hash password
       const saltRound = 10;
       const hashPassword = await bcrypt.hash(password,saltRound);

       //create new user
       const userCreated = await User.create({username,email,phone,password:hashPassword});

       return res.status(200).json({message:"register successfull", token : await userCreated.generateToken(), userId : userCreated._id.toString()});
    } catch (error) {
        console.log("error from register page",error);
    }
}


//user login logic start here 


const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        //user check user is exist ya not

        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(401).json({message:"invalid creadantials"});
        }

        //compare password 
        const user = await bcrypt.compare(password,userExist.password);
        if(user){
            return res.status(200).json({message:"login successfull", token : await userExist.generateToken(), userId: userExist._id.toString()});
        }else{
            return res.status(401).json({message:"invalid credantials"});
        }

    } catch (error) {
        console.log("error from login page",error);
    }
}


// fetch user data from backend 

const user = async (req,res) => {
    const token = req.header("Authorization");
    if(!token){
        return res.status(401).json({message:"unthorized token"})
    }

    const jwtToken = token.replace("Bearer ","").trim();
    // console.log(jwtToken);

    try {
        const isVerfified = jwt.verify(jwtToken,process.env.secret_key);
        const userData = await User.findOne({email:isVerfified.email}).select({password:0});
        return res.status(201).json(userData)
        // console.log(userData);
    } catch (error) {
        console.log("error from get user data",error);
    }
}








module.exports = {home,register,login,user};