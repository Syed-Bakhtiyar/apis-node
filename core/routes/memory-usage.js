const express = require('express');
const router = express.Router();

module.exports = (memoryUsageService) => {
    const validateInput = require('../../shared/utils/input-validation-middleware')(['deviceId']);
    const errorMiddleware = require('../../shared/utils/error-middleware');

    router.post('/memory-usage', validateInput, async (req, res, next)=>{
        try{
            await memoryUsageService.createMemoryUsage(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    }, errorMiddleware.errorMiddleware);

    return router;
}