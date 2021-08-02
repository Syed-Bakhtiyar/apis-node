const express = require('express');
const router = express.Router();

module.exports = (locationService) => {

    router.post('/location', async (req, res, next)=>{
        try{
            await locationService.createLocation(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}