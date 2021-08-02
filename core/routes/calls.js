const express = require('express');
const router = express.Router();

module.exports = (callService) => {

    router.post('/calls', async (req, res, next)=>{
        try{
            await callService.createCall(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}