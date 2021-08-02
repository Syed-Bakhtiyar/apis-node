const TABLES = require('../../shared/dbModule/tables-name');

module.exports = (connection)=>{
    const createDevice = (device) => {
        const query = `INSERT INTO ${TABLES.DEVICE_TABLE} (imei_number, manufacturer, mode, sr_no, brand, base, sdk, dev_id) VALUES 
                                                          ('${device.imeiNumber}', '${device.manufacturer}', '${device.mode}', '${device.srNo}', '${device.brand}', '${device.base}', '${device.sdk}', '${device.devId}')`;
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