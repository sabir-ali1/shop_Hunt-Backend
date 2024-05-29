const validate = (schema) => async (req,res,next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {
        const status = 400
        const message = "fill the input properly"
        const extraDetails = err.errors[0].message;
        next({ status, message, extraDetails })
        
    }
}

module.exports = validate