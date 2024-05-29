const adminMiddelware = (req,res,next) => {
    try {
        
        const adminRole = req.user.isAdmin
        if(!adminRole){
            return res.status(404).json({message:"user is not admin"})
        }

       next();

    } catch (error) {
        console.log("error from adminMiddelware",error);
    }
}

module.exports = adminMiddelware;