const express = require('express');
const router = express.Router();

module.exports = (appUsageService) => {

    router.post('/app-usage', async (req, res, next)=>{
        try{
            await appUsageService.createAppUsage(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}