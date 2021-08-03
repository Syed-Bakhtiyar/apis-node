const express = require('express');
const router = express.Router();

module.exports = (urlVisitedService) => {
    const validateInput = require('../../shared/utils/input-validation-middleware')(['imeiNumber']);
    const errorMiddleware = require('../../shared/utils/error-middleware');

    router.post('/url-visited', validateInput, async (req, res, next)=>{
        try{
            await urlVisitedService.createUrlVisited(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    }, errorMiddleware.errorMiddleware);

    return router;
}