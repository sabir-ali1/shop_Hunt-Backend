const User = require("../models/auth-models")

//to fetch user all user for admin panel

const getAllUsers = async(req,res) => {
    try {
        
        const users = await User.find({},{password:0});
        if(!users || users.length === 0){
            return res.status(401).json({message:"user is not find"});
        }
       return res.status(200).json(users);

    } catch (error) {
        console.log("error from user data",error);
    }
}


module.exports = getAllUsers;