const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createAppUsage = (appUsage) => {
        const serverTimestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.APP_USAGE_TABLE} (device_id, freq_app_usage, duration_app_usage, pattern, most_used, least_used, timestamp, server_timestamp) VALUES 
                                                          ('${appUsage.deviceId}', '${appUsage.freqAppUsage}', '${appUsage.durationAppUsage}', '${appUsage.pattern}', '${appUsage.mostUsed}', '${appUsage.leastUsed}', '${appUsage.timestamp}', '${serverTimestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createAppUsage};
}