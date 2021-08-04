const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createMemoryUsage = (memoryUsage) => {
        const timestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.MEMORY_USAGE_TABLE} (imei_number, app_mem, apps, timestamp) VALUES 
                                                          ('${memoryUsage.imeiNumber}', '${memoryUsage.appMem}', '${memoryUsage.apps}', '${timestamp}')`;
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