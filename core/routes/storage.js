const express = require('express');
const router = express.Router();

module.exports = (storageService) => {

    router.post('/storage', async (req, res, next)=>{
        try{
            await storageService.createStorage(req.body);
            return res.json({data: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}