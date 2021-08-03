const express = require('express');
const router = express.Router();

module.exports = (networkService) => {
    const validateInput = require('../../shared/utils/input-validation-middleware')(['imeiNumber']);
    const errorMiddleware = require('../../shared/utils/error-middleware');

    router.post('/network', validateInput, async (req, res, next)=>{
        try{
            await networkService.createNetwork(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    }, errorMiddleware.errorMiddleware);

    return router;
}