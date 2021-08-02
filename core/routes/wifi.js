const express = require('express');
const router = express.Router();

module.exports = (wifiService) => {

    router.post('/wifi', async (req, res, next)=>{
        try{
            await wifiService.createWIFI(req.body);
            return res.json({data: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}