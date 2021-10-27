const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createBattery = (battery) => {
        const serverTimestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.BATTERY_TABLE} (device_id, is_charging, bat_current_status, timestamp, server_timestamp) VALUES 
                                                          ('${battery.deviceId}', '${battery.isCharging}', '${battery.batCurrentStatus}', '${battery.timestamp}', '${serverTimestamp}')`;
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