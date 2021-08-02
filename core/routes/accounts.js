const express = require('express');
const router = express.Router();

module.exports = (accountsService) => {

    router.post('/accounts', async (req, res, next)=>{
        try{
            await accountsService.createAccounts(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}