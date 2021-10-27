const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createMemoryUsage = (memoryUsage) => {
        const serverTimestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.MEMORY_USAGE_TABLE} (device_id, app_mem, apps, timestamp, server_timestamp) VALUES 
                                                          ('${memoryUsage.deviceId}', '${memoryUsage.appMem}', '${memoryUsage.apps}', '${memoryUsage.timestamp}', '${serverTimestamp}')`;
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