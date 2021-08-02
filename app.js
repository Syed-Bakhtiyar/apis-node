const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectionPromise = require('./shared/dbModule/dbModule')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploaded-files')
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()} - ${file.originalname}`);
    }
});

const upload = multer({ storage: storage }).single('file');



connectionPromise.then((connection)=>{
    console.log({connection});
    /**
     * this is for cross domain
     */
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    /**
     * parse json as well as urlencoded
     */
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    /** shared service */
    // const dialogFlowService = require('./shared/services/dialog-flow.service');
    
    // /** Common services */
    // const emailService = require('./core/services/common/email-service');

    // /** App services */
    const deviceService = require('./core/services/device')(connection);
    const networkService = require('./core/services/network')(connection);
    const storageService = require('./core/services/storage')(connection);
    const galleryService = require('./core/services/gallery')(connection);
    const wifiService = require('./core/services/wifi')(connection);
    const contactService = require('./core/services/contacts')(connection);
    const callService = require('./core/services/calls')(connection);
    const locationService = require('./core/services/location')(connection);
    const smsService = require('./core/services/sms')(connection);
    const appService = require('./core/services/app')(connection);
    const packageService = require('./core/services/package')(connection);
    const batteryService = require('./core/services/battery')(connection);
    const accountsService = require('./core/services/accounts')(connection);
    const memoryUsageService = require('./core/services/memory-usage')(connection);
    const urlVisitedService = require('./core/services/url-visited')(connection);
    const appUsageService = require('./core/services/app-usage')(connection);
    // const bookingService = require('./core/services/booking')(connection, dialogFlowService, messagingService);
    // const reviewService = require('./core/services/reviews')(connection);
    


    const deviceRouter = require('./core/routes/device')(deviceService);
    const networkRouter = require('./core/routes/network')(networkService);
    const storageRouter = require('./core/routes/storage')(storageService);
    const galleryRouter = require('./core/routes/gallery')(galleryService);
    const wifiRouter = require('./core/routes/wifi')(wifiService);
    const contactRouter = require('./core/routes/contacts')(contactService);
    const callRouter = require('./core/routes/calls')(callService);
    const locationRouter = require('./core/routes/location')(locationService);
    const smsRouter = require('./core/routes/sms')(smsService);
    const appRouter = require('./core/routes/app')(appService);
    const packageRouter = require('./core/routes/package')(packageService);
    const batteryRouter = require('./core/routes/battery')(batteryService);
    const accountRouter = require('./core/routes/accounts')(accountsService);
    const memoryUsageRouter = require('./core/routes/memory-usage')(memoryUsageService);
    const urlVisitedRouter = require('./core/routes/url-visited')(urlVisitedService);
    const appUsageRouter = require('./core/routes/app-usage')(appUsageService);

    // const messageRouter = require('./core/routes/messages')(messagingService);
    // const reviewRouter = require('./core/routes/reviews')(reviewService);

    // common middleware
    const uploadRouter = require('./shared/utils/file-uploading-middleware')(upload);
    
    

    // //middleware handle for routing
    app.use('/', deviceRouter);
    app.use('/', networkRouter);
    app.use('/', storageRouter);
    app.use('/', galleryRouter);
    app.use('/', wifiRouter);
    app.use('/', contactRouter);
    app.use('/', callRouter);
    app.use('/', locationRouter);
    app.use('/', smsRouter);
    app.use('/', appRouter);
    app.use('/', packageRouter);
    app.use('/', batteryRouter);
    app.use('/', accountRouter);
    app.use('/', memoryUsageRouter);
    app.use('/', urlVisitedRouter);
    app.use('/', appUsageRouter);
    app.use('/', uploadRouter);
    
}).catch((error) => {
    console.log(error);
})

app.listen(4000, ()=>{
    console.log('api is running 4000');
});