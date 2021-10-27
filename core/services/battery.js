const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createBattery = (battery) => {
        const timestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.BATTERY_TABLE} (device_id, is_charging, bat_current_status, timestamp) VALUES 
                                                          ('${battery.deviceId}', '${battery.isCharging}', '${battery.batCurrentStatus}', '${timestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createBattery};
}