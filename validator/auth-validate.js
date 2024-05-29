const {z} = require("zod");

const loginSchema = z.object({
    email : z.string({required_error:"email is required"})
    .email({message:"email is required"})
    .trim()
    .min(3,{message:"email is must be alteast 3 character "})
    .max(257,{message:"email must not be longer than 257 characters"}),

    password:z.string({required_error:"password is required"})
    .trim()
    .min(7,{message:"password must be atleast 7 characters"})
    .max(257,{message:"password must not be longer than 257 characters"})
})


const userSchema = loginSchema.extend({
    username : z.string({required_error:"username is required"})
    .trim()
    .min(3,{message:"username must be atleast 3 atleast characters"})
    .max(257,{message:"username must not be longer than 257 character"}),

   

    phone: z.string({required_error:"phone is required"})
    .trim()
    .min(10,{message:"phone number must be atleast 10 Number"})
    .max(20,{message:"phone number must not be longer than 20 charcters"}),

   

});

module.exports = {loginSchema,userSchema}