const TABLES = require('../../shared/dbModule/tables-name');

module.exports = (connection)=>{
    const createStorage = (storage) => {
        const query = `INSERT INTO ${TABLES.STORAGE_TABLE} (imei_number, ram, secondary_memory, available_storage, total_secondary_memory) VALUES 
                                                          ('${storage.imeiNumber}', '${storage.ram}', ${storage.secondaryMemory}, ${storage.availableStorage}, ${storage.totalSecondaryMemory})`;
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