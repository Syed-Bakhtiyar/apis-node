const express = require('express');
const router = express.Router();

module.exports = (contactService) => {
    const validateInput = require('../../shared/utils/input-validation-middleware')(['imeiNumber']);
    const errorMiddleware = require('../../shared/utils/error-middleware');

    router.post('/contacts', validateInput, async (req, res, next)=>{
        try{
            await contactService.createContacts(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500).send();
            return next('internal server error');
        }
    }, errorMiddleware.errorMiddleware);

    return router;
}