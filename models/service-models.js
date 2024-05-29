const {Schema,model} = require("mongoose");


const serviceSchema = new Schema({
    name: {type:String, required: true},
    title: {type:String, required: true},
    img : {type:String, required:true},
    price:{type:String, required:true},
    description: {type:String, required: true}
});


const Services = new model("Services",serviceSchema);

module.exports = Services