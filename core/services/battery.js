const TABLES = require('../../shared/dbModule/tables-name');

module.exports = (connection)=>{
    const createBattery = (battery) => {
        const query = `INSERT INTO ${TABLES.BATTERY_TABLE} (imei_number, is_charging, bat_current_status, timestamp) VALUES 
                                                          ('${battery.imeiNumber}', ${battery.isCharging}, ${battery.batCurrentStatus}, '${battery.timestamp}')`;
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