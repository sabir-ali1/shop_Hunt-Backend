const Services = require("../models/service-models");


// service page logic start here 


const service = async (req, res) => {
    try {
        const response = await Services.find();
        return res.status(200).json(response)
    } catch (error) {
        console.log("error from service page",service);
    }
}


module.exports = service