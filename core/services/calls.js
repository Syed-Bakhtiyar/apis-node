const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createCall = (calls) => {
        const timestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.CALLS_TABLE} (imei_number, type, number, duration, start_time, call_ans_rate, timestamp) VALUES 
                                                          ('${calls.imeiNumber}', '${calls.type}', '${calls.number}', '${calls.duration}', '${calls.startTime}', '${calls.callAnsRate}', '${timestamp}')`;
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