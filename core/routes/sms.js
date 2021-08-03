const express = require('express');
const router = express.Router();

module.exports = (smsService) => {
    const validateInput = require('../../shared/utils/input-validation-middleware')(['imeiNumber']);
    const errorMiddleware = require('../../shared/utils/error-middleware');

    router.post('/sms', validateInput, async (req, res, next)=>{
        try{
            await smsService.createSMS(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    }, errorMiddleware.errorMiddleware);

    return router;
}