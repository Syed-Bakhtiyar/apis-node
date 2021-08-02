const express = require('express');
const router = express.Router();

module.exports = (memoryUsageService) => {

    router.post('/memory-usage', async (req, res, next)=>{
        try{
            await memoryUsageService.createMemoryUsage(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}