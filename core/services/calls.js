const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createCall = (calls) => {
        const serverTimestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.CALLS_TABLE} (device_id, type, number, duration, start_time, call_ans_rate, timestamp, server_timestamp) VALUES 
                                                          ('${calls.deviceId}', '${calls.type}', '${calls.number}', '${calls.duration}', '${calls.startTime}', '${calls.callAnsRate}', '${calls.timestamp}', '${serverTimestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createCall};
}