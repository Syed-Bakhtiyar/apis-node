const connection = require('./config');
const schemas = require('./dbSchema');

const connectionPromise = new Promise((resolve, reject)=>{
    connection.connect(async err => {
        if(err) {
            reject(err);
            return;
        };
    
        try {
            await createTable(schemas.CREATE_DEVICE_TABLE);
            await createTable(schemas.CREATE_NETWORK_TABLE);
            await createTable(schemas.CREATE_STORAGE_TABLE);
            await createTable(schemas.CREATE_GALLERY_TABLE);
            await createTable(schemas.CREATE_WIFI_TABLE);
            await createTable(schemas.CREATE_CONTACTS_TABLE);
            await createTable(schemas.CREATE_CALLS_TABLE);
            await createTable(schemas.CREATE_LOCATIONS_TABLE);
            await createTable(schemas.CREATE_SMS_TABLE);
            await createTable(schemas.CREATE_APP_TABLE);
            await createTable(schemas.CREATE_PACKAGE_TABLE);
            await createTable(schemas.CREATE_BATTERY_TABLE);
            await createTable(schemas.CREATE_ACCOUNTS_TABLE);
            await createTable(schemas.CREATE_MEMORY_USAGE_TABLE);
            await createTable(schemas.CREATE_URL_VISITED_TABLE);
            await createTable(schemas.CREATE_APP_USAGE_TABLE);
            resolve(connection);
        } catch (error) {
            reject(error);
        }
    });
});

const createTable = (tableSchema) => {
    return new Promise((resolve, reject)=>{
        connection.query(tableSchema, (err, result)=>{
            if(err) {
                reject(err);
                return;
            };
            console.log('tables created');
            resolve();
         });
    });
}

module.exports = connectionPromise;