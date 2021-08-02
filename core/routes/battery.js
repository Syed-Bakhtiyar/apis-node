const express = require('express');
const router = express.Router();

module.exports = (batteryService) => {

    router.post('/battery', async (req, res, next)=>{
        try{
            await batteryService.createBattery(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}