const express = require('express');
const router = express.Router();

module.exports = (contactService) => {

    router.post('/contacts', async (req, res, next)=>{
        try{
            await contactService.createContacts(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500).send();
            return next('internal server error');
        }
    });

    return router;
}