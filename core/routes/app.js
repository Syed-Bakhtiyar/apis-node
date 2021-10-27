const express = require('express');
const router = express.Router();

module.exports = (appService) => {
    const validateInput = require('../../shared/utils/input-validation-middleware')(['deviceId']);
    const errorMiddleware = require('../../shared/utils/error-middleware');

    router.post('/app', validateInput, async (req, res, next)=>{
        try{
            await appService.createApp(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    }, errorMiddleware.errorMiddleware);

    return router;
}