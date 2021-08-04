const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createAppUsage = (appUsage) => {
        const timestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.APP_USAGE_TABLE} (imei_number, freq_app_usage, duration_app_usage, pattern, most_used, least_used, timestamp) VALUES 
                                                          ('${appUsage.imeiNumber}', '${appUsage.freqAppUsage}', '${appUsage.durationAppUsage}', '${appUsage.pattern}', '${appUsage.mostUsed}', '${appUsage.leastUsed}', '${timestamp}')`;
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