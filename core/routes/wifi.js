const express = require('express');
const router = express.Router();

module.exports = (wifiService) => {
    const validateInput = require('../../shared/utils/input-validation-middleware')(['deviceId']);
    const errorMiddleware = require('../../shared/utils/error-middleware');

    router.post('/wifi', validateInput, async (req, res, next)=>{
        try{
            await wifiService.createWIFI(req.body);
            return res.json({data: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    }, errorMiddleware.errorMiddleware);

    return router;
}