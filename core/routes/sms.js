const express = require('express');
const router = express.Router();

module.exports = (smsService) => {

    router.post('/sms', async (req, res, next)=>{
        try{
            await smsService.createSMS(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}