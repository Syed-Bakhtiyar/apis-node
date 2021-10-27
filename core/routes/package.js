const express = require('express');
const router = express.Router();

module.exports = (packageService) => {
    const validateInput = require('../../shared/utils/input-validation-middleware')(['deviceId']);
    const errorMiddleware = require('../../shared/utils/error-middleware');

    router.post('/package', validateInput, async (req, res, next)=>{
        try{
            await packageService.createPackage(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    }, errorMiddleware.errorMiddleware);

    return router;
}