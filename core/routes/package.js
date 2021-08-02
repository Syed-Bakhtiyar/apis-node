const express = require('express');
const router = express.Router();

module.exports = (packageService) => {

    router.post('/package', async (req, res, next)=>{
        try{
            await packageService.createPackage(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}