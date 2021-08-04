const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createStorage = (storage) => {
        const timestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.STORAGE_TABLE} (imei_number, ram, secondary_memory, available_ram, available_sec_memory, timestamp) VALUES 
                                                          ('${storage.imeiNumber}', '${storage.ram}', '${storage.secondaryMemory}', '${storage.availableRam}', '${storage.availableMemory}', '${timestamp}')`;
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