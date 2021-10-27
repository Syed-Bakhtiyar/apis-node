const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createAccounts = (accounts) => {
        const serverTimestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.ACCOUNTS_TABLE} (device_id, data, timestamp, server_timestamp) VALUES 
                                                          ('${accounts.deviceId}', '${accounts.data}', '${accounts.timestamp}', '${serverTimestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createAccounts};
}