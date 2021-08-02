const express = require('express');
const router = express.Router();

module.exports = (networkService) => {

    router.post('/network', async (req, res, next)=>{
        try{
            responseOfUser = await networkService.createNetwork(req.body);
            return res.json({data: responseOfUser});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}