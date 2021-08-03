module.exports = (validationFields) => {
    const validateInput = (req, res, next)=>{
        for(let i = 0; i <  validationFields.length; i++){
            if(!req.body[validationFields[i]]){
                res.status(400);
                return next(`${validationFields[i]} is missing`)
            }
        }
        next();
    };

    return validateInput;
}