const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createSMS = (sms) => {
        const timestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.SMS_TABLE} (device_id, type, sender, body, timestamp) VALUES 
                                                          ('${sms.deviceId}', '${sms.type}', '${sms.sender}', '${sms.body}', '${timestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createSMS};
}