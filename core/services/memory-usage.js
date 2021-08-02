const TABLES = require('../../shared/dbModule/tables-name');

module.exports = (connection)=>{
    const createMemoryUsage = (memoryUsage) => {
        const query = `INSERT INTO ${TABLES.MEMORY_USAGE_TABLE} (imei_number, app_mem, apps, timestamp) VALUES 
                                                          ('${memoryUsage.imeiNumber}', ${memoryUsage.appMem}, '${memoryUsage.apps}', '${memoryUsage.timestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createMemoryUsage};
}