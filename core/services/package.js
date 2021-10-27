const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createPackage = (package) => {
        const serverTimestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.PACKAGE_TABLE} (device_id, tot_package, package_name, timestamp, server_timestamp) VALUES 
                                                          ('${package.deviceId}', '${package.totPackage}', '${package.packageName}', '${package.timestamp}', '${serverTimestamp}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createPackage};
}