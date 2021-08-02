const express = require('express');
const router = express.Router();

module.exports = (urlVisitedService) => {

    router.post('/url-visited', async (req, res, next)=>{
        try{
            await urlVisitedService.createUrlVisited(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}