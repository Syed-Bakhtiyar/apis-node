const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createStorage = (storage) => {
        const serverTimestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.STORAGE_TABLE} (device_id, ram, secondary_memory, available_ram, available_sec_memory, timestamp, server_timestamp) VALUES 
                                                          ('${storage.deviceId}', '${storage.ram}', '${storage.secondaryMemory}', '${storage.availableRam}', '${storage.availableMemory}', '${storage.timestamp}', '${serverTimestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createStorage};
}