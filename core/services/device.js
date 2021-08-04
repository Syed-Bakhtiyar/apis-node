const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createDevice = (device) => {
        const timestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.DEVICE_TABLE} (imei_number, manufacturer, mode, sr_no, brand, base, sdk, dev_id, timestamp) VALUES 
                                                          ('${device.imeiNumber}', '${device.manufacturer}', '${device.mode}', '${device.srNo}', '${device.brand}', '${device.base}', '${device.sdk}', '${device.devId}', '${timestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createDevice};
}