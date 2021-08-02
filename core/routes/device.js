const express = require('express');
const router = express.Router();

module.exports = (deviceService) => {

    router.post('/device', async (req, res, next)=>{
        try{
            responseOfUser = await deviceService.createDevice(req.body);
            return res.json({data: responseOfUser});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}