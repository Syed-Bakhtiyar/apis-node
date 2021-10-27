const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createDevice = (device) => {
        const serverTimestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.DEVICE_TABLE} (device_id, manufacturer, mode, sr_no, brand, base, sdk, timestamp, server_timestamp) VALUES 
                                                          ('${device.deviceId}', '${device.manufacturer}', '${device.mode}', '${device.srNo}', '${device.brand}', '${device.base}', '${device.sdk}', '${device.timestamp}', '${serverTimestamp}')`;
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