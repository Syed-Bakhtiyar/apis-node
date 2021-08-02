const express = require('express');
const router = express.Router();

module.exports = (galleryService) => {

    router.post('/gallery', async (req, res, next)=>{
        try{
            await galleryService.createGallery(req.body);
            return res.json({message: 'ok'});
        }catch(e){
            res.status(500);
            return next('internal server error');
        }
    });

    return router;
}