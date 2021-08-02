const express = require('express');
const router = express.Router();

module.exports = (appService) => {

    router.post('/app', async (req, res, next)=>{
        try{
            await appService.createApp(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}