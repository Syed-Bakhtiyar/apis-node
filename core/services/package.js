const TABLES = require('../../shared/dbModule/tables-name');
const moment = require('moment');

module.exports = (connection)=>{
    const createPackage = (package) => {
        const timestamp = moment().format('YYYY-MM-DD HH:mm:s');
        const query = `INSERT INTO ${TABLES.PACKAGE_TABLE} (imei_number, tot_package, package_name, timestamp) VALUES 
                                                          ('${package.imeiNumber}', '${package.totPackage}', '${package.packageName}', '${timestamp}')`;
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