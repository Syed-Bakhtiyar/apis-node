const TABLES = require('../../shared/dbModule/tables-name');

module.exports = (connection)=>{
    const createPackage = (package) => {
        const query = `INSERT INTO ${TABLES.PACKAGE_TABLE} (imei_number, tot_package, package_name, timestamp) VALUES 
                                                          ('${package.imeiNumber}', ${package.totPackage}, '${package.packageName}', '${package.timestamp}')`;
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